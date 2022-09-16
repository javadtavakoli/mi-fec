import { ProcessedVideo } from '../common/interfaces';
import AuthorsServices from './authors';
import CategoriesServices from './categories';

const Get = async (): Promise<ProcessedVideo[]> => {
  const [categories, authors] = await Promise.all([CategoriesServices.Get(), AuthorsServices.Get()]);

  return []; // TODO: implement
};
const VideosServices = { Get };
export default VideosServices;