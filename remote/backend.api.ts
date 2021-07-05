import User from "../models/user";
import backendClient from "./backend.client";

interface Error {
  message: string;
}
export const login = async (username: string, password: string): Promise<User> => {
  const { data: user } = await backendClient.post<User>('/login', {
    username,
    password,
  });
  return user;
}

export const register = async (): Promise<String> => {
  const { data: message } = await backendClient.put('/register');
  return message;
}