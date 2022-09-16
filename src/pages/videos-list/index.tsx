import { VideosTable } from '../../components/videos-table';
import useLoadVideos from '../../hooks/loadVideos';

const VideosListPage = () => {
  const { videos } = useLoadVideos();

  return <VideosTable videos={videos} />;
};
export default VideosListPage;
