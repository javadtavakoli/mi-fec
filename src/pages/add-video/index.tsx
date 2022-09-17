import VideoForm from '../../components/videoForm';
import useAddVideo from '../../hooks/addVideo';

const AddVideoPage = () => {
  const { submit, cancel } = useAddVideo();
  return (
    <>
      <h1>Add Video</h1>
      <VideoForm cancel={cancel} submit={submit} initialValues={{ name: '', catIds: [], authorId: -1 }} />
    </>
  );
};
export default AddVideoPage;
