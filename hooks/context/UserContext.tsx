import React from 'react';
import Asset from '../../models/asset';
import Register from '../../models/register';
import Tickets from '../../models/tickets';

const UserContext = React.createContext({
    user: '',
    setUser: (u:string) => {},
    role: '',
    setRole: (r:string) => {},
    authenticated: false,
    setAuthenticated: (auth:boolean) => {},
    asset: {} as Asset,
    setAsset: (r:Asset) => {},
    assets: [] as Asset[] | null,
    setAssets: (value:Array<Asset> | null) => {},
    tag: '',
    setTag: (r:string) => {},
    tickets: [] as Tickets[] | null,
    setTickets: (value:Array<Tickets> | null) => {},
    registers: [] as Register[] | null,
    setRegisters: (value:Array<Register> | null) => {},
  });

  export default UserContext;