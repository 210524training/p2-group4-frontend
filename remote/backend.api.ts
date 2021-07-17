import User from "../models/user";
import Log from "../models/log";
import backClient from "./backend.client";
import Tickets from '../models/tickets';
import Memo from '../models/memo';
import Asset from '../models/asset';
import Register from "../models/register";

interface Error {
  message: string;
}
export const login = async (username: string, password: string): Promise<User> => {
  const { data: user } = await backClient.post<User>('/login', {
    username,
    password,
  });
  return user;
}

export const register = async (): Promise<String> => {
  const { data: message } = await backClient.put('/register');
  return message.register;
}

export const getLog = async (tag:string): Promise<Log[]> => {
  const { data: response } = await backClient.get('/log');
  let filter = response.data as Log[];
  filter = filter.filter(log => log.asset_tag == tag);
  return filter;
}

export const getTicket = async () => {
  const { data: response } = await backClient.get('/ticket');
  return response.data as Tickets[];
}

export const getMemo = async (): Promise<Memo[]> => {
  const { data: response } = await backClient.get('/memo');
  return response.data as Memo[];
}

export const getAsset = async (): Promise<Asset[]> => {
  const { data: response } = await backClient.get('/asset');
  return response.data as Asset[];
}

export const getRegister = async () => {
  const { data: response }  = await backClient.get('/register');
  return response.data as Register[];
}

export const update = async (path:string, id:string, what:string, change:string) => {
  const response = await backClient.patch(path, {id, what, change});
  return response;
}
