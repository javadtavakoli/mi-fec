import { AxiosResponse } from 'axios';
import AxiosClient from '../common/axios';
import type { Author } from '../common/interfaces';

const Get = async (): Promise<AxiosResponse<Author[]>> => {
  return AxiosClient.get('authors');
};
const Update = async (author: Author): Promise<AxiosResponse<Author>> => {
  return AxiosClient.put(`authors/${author.id}`, author);
};

const AuthorsServices = { Get, Update };
export default AuthorsServices;
