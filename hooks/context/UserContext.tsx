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
    asset: {id:""},
    setAsset: (r:Asset) => {},
    tag: '',
    setTag: (r:string) => {},
    tickets: [] as Tickets[] | null,
    setTickets: (value:Array<Tickets> | null) => {},
    registers: [] as Register[] | null,
    setRegisters: (value:Array<Register> | null) => {},
  });

  export default UserContext;