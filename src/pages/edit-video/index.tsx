import { useParams } from 'react-router';
import VideoForm from '../../components/videoForm';
import useEditVideo from '../../hooks/editVideo';

const EditVideoPage = () => {
  const { videoId } = useParams();
  const { submit, cancel, initialVideo } = useEditVideo(parseInt(videoId || '1'));
  return initialVideo ? (
    <>
      <h1>Edit Video</h1>
      <VideoForm cancel={cancel} submit={submit} initialValues={initialVideo} />
    </>
  ) : (
    <>Loading...</>
  );
};
export default EditVideoPage;
