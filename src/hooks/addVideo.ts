import { useNavigate } from 'react-router';
import { DEFAULT_NEW_FORMAT } from '../common/config/constants';
import { Author } from '../common/interfaces';
import RandomDate from '../common/utils/randomDate';
import VideoIdTools from '../common/utils/videoId';
import { VideoFormValues } from '../components/videoForm/type';
import AuthorsAsyncActions from '../slices/authors/async';
import useLoadAuthors from './loadAuthors';
import useLoadCategories from './loadCategories';
import { useAppDispatch } from './reduxHooks';

const useAddVideo = () => {
  useLoadCategories();
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
    console.log(author, values, '123');

    if (!author) return;
    const editAuthor: Author = { ...author, videos: [...author.videos] };
    editAuthor.videos.push({
      catIds: values.catIds.map((id) => +id),
      name: values.name,
      releaseDate: RandomDate.Generate(),
      formats: DEFAULT_NEW_FORMAT,
      id: VideoIdTools.Generate(authors),
    });
    await dispatch(AuthorsAsyncActions.Update(editAuthor));
    goToVideos();
  };
  return { submit, cancel };
};
export default useAddVideo;
