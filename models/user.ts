export default class User {
  constructor(
    public id: string,
    public password: string,
    public role = 'Technician' || 'Admin',
  ) {}
}