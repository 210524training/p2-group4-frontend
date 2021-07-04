export default class User {
  constructor(
    public ID: string,
    public Password: string,
    public Role = 'Technician' || 'Admin',
  ) {}
}