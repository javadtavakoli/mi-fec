import { AxiosResponse } from 'axios';
import AxiosClient from '../common/axios';
import type { Category } from '../common/interfaces';

const Get = async (): Promise<AxiosResponse<Category[]>> => {
  return AxiosClient.get('categories');
};
const CategoriesServices = { Get };
export default CategoriesServices;
