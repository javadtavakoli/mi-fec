import { ProcessedVideo } from '../common/interfaces';
import AuthorsServices from './authors';
import CategoriesServices from './categories';

const Get = async (): Promise<ProcessedVideo[]> => {
  const [categoriesResponse, authorsResponse] = await Promise.all([CategoriesServices.Get(), AuthorsServices.Get()]);
  const authors = authorsResponse.data;
  const categories = categoriesResponse.data;
  const proccessedVideos: ProcessedVideo[] = [];
  authors.forEach((author) => {
    const authorVideos = author.videos.map<ProcessedVideo>((av) => ({
      author: author.name,
      categories: av.catIds.map((catId) => {
        return categories.find((c) => c.id === catId)?.name || '';
      }),
      id: av.id,
      name: av.name,
    }));
    proccessedVideos.push(...authorVideos);
  });
  return proccessedVideos;
};
const VideosServices = { Get };
export default VideosServices;
