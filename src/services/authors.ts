import { AxiosResponse } from 'axios';
import AxiosClient from '../common/axios';
import type { Author } from '../common/interfaces';

const Get = async (): Promise<AxiosResponse<Author[]>> => {
  return AxiosClient.get('authors');
};

const AuthorsServices = { Get };
export default AuthorsServices;
