import { IUserDetails } from '@/data/interfaces/user-details.ts';

export interface ISignResult {
  refreshToken: string;
  accessToken: string;
  user: IUserDetails;
}
