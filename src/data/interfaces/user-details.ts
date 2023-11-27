import { Role } from '@/data/enums/role.ts';

export interface IUserDetails {
  _id: string;
  email: string;
  username: string;
  role: Role;
}
