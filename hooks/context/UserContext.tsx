import React from 'react';
import Register from '../../models/register';
import Tickets from '../../models/tickets';

const UserContext = React.createContext({
    user: '',
    setUser: (u:string) => {},
    role: '',
    setRole: (r:string) => {},
    authenticated: false,
    setAuthenticated: (auth:boolean) => {},
    asset: {},
    setAsset: (r:object) => {},
    tickets: [] as Tickets[] | null,
    setTickets: (value:Array<Tickets> | null) => {},
    registers: [] as Register[] | null,
    setRegisters: (value:Array<Register> | null) => {},
  });

  export default UserContext;