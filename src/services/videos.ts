import { ProcessedVideo } from '../common/interfaces';
import VideoFormatTools from '../common/utils/videoFormatTools';
import AuthorsServices from './authors';
import CategoriesServices from './categories';

const Get = async (): Promise<ProcessedVideo[]> => {
  const [categoriesResponse, authorsResponse] = await Promise.all([CategoriesServices.Get(), AuthorsServices.Get()]);
  const authors = authorsResponse.data;
  const categories = categoriesResponse.data;
  const proccessedVideos: ProcessedVideo[] = [];
  console.log(authors, 'authors');

  authors.forEach((author) => {
    const authorVideos = author.videos.map<ProcessedVideo>((av) => ({
      author: author.name,
      categories: av.catIds.map((catId) => categories.find((c) => c.id === catId)?.name || ''),
      id: av.id,
      name: av.name,
      highestQualityFormat: VideoFormatTools.HighestFormat(Object.entries(av.formats)),
      releaseDate: av.releaseDate,
    }));
    proccessedVideos.push(...authorVideos);
  });

  return proccessedVideos;
};
const VideosServices = { Get };
export default VideosServices;
