import { Author } from '../common/interfaces';
import FindVideoAuthor from '../common/utils/find-video-author';
import AuthorsAsyncActions from '../slices/authors/async';
import { VideoActions } from '../slices/videos';
import useLoadAuthors from './loadAuthors';
import { useAppDispatch } from './reduxHooks';

const useDeleteVideo = () => {
  const { authors } = useLoadAuthors();
  const dispatch = useAppDispatch();
  const deleteVideo = async (videoId: number) => {
    const [video, author] = FindVideoAuthor.ByVideoId(authors, videoId);
    const editAuthor: Author = { ...author, videos: [...author.videos.filter((v) => v.id !== videoId)] };
    await dispatch(AuthorsAsyncActions.Update(editAuthor));
    dispatch(VideoActions.delete(videoId));
  };
  return { deleteVideo };
};
export default useDeleteVideo;
