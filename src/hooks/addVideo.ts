import { useNavigate } from 'react-router';
import { DEFAULT_NEW_FORMAT } from '../common/config/constants';
import { Author, ProcessedVideo } from '../common/interfaces';
import RandomDate from '../common/utils/random-date';
import VideoIdTools from '../common/utils/video-id';
import { VideoFormValues } from '../components/video-form/type';
import AuthorsAsyncActions from '../slices/authors/async';
import { VideoActions } from '../slices/videos';
import useLoadAuthors from './loadAuthors';
import useLoadCategories from './loadCategories';
import { useAppDispatch } from './reduxHooks';

const useAddVideo = () => {
  const { categories } = useLoadCategories();
  const { authors } = useLoadAuthors();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToVideos = () => {
    navigate('/videos');
  };
  const cancel = () => {
    goToVideos();
  };
  const submit = async (values: VideoFormValues) => {
    const author = authors.find((a) => a.id === +values.authorId);
    const categoryIds = values.catIds.map((id) => +id);
    if (!author) return;
    const editAuthor: Author = { ...author, videos: [...author.videos] };
    const addedVideo = {
      catIds: categoryIds,
      name: values.name,
      releaseDate: RandomDate.Generate(),
      formats: DEFAULT_NEW_FORMAT,
      id: VideoIdTools.Generate(authors),
    };
    editAuthor.videos.push(addedVideo);
    await dispatch(AuthorsAsyncActions.Update(editAuthor));
    const addedProcessedVideo: ProcessedVideo = {
      author: editAuthor.name,
      categories: values.catIds.map((cId) => categories.find((cat) => cat.id === cId)?.name || ''),
      highestQualityFormat: {
        formatName: Object.keys(addedVideo.formats)[0],
        res: Object.values(addedVideo.formats)[0].res,
        size: Object.values(addedVideo.formats)[0].size,
      },
      id: addedVideo.id,
      releaseDate: addedVideo.releaseDate,
      name: addedVideo.name,
    };
    dispatch(VideoActions.add(addedProcessedVideo));
    goToVideos();
  };
  return { submit, cancel };
};
export default useAddVideo;
