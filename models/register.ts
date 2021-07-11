export default class Register {
    constructor(
      public id: string,
      public password: string,
      public name: string,
      public role = 'Technician' || 'User',
      public status = 'pending' || 'rejected' || 'approved',
    ) {}
  }
