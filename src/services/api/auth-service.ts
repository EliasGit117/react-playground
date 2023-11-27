import { api } from '@/services/api/api.ts';
import { AxiosResponse } from 'axios';
import { ISignResult } from '@/data/interfaces/sign-result.ts';

export class AuthService {
  static readonly controller = 'auth';

  static async signIn(body: { email: string, password: string }) {
    return api.post(`${this.controller}`, body)
      .then((r: AxiosResponse<ISignResult>) => r.data);
  }
}
