import { ProcessedVideo } from '../common/interfaces';
import VideoFormatTools from '../common/utils/videoFormatTools';
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
const Search = async (search: string): Promise<ProcessedVideo[]> => {
  const allVideos = await Get();
  return allVideos.filter((v) => {
    if (v.name.includes(search)) return true;
    if (v.author.includes(search)) return true;
    if (v.highestQualityFormat.formatName.includes(search)) return true;
    if (v.highestQualityFormat.res.includes(search)) return true;
    if (v.releaseDate.includes(search)) return true;
    if (v.categories.some((c) => c.includes(search))) return true;
    return false;
  });
};
const VideosServices = { Get, Search };
export default VideosServices;
