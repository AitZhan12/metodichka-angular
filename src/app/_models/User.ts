import {Role} from './Role';

export class User {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
