import VideoForm from '../../components/videoForm';
import useAddVideo from '../../hooks/addVideo';
import headingStyle from '../../common/css/heading.module.css';

const AddVideoPage = () => {
  const { submit, cancel } = useAddVideo();
  return (
    <>
      <h1 className={headingStyle.pageHeading}>Add Video</h1>
      <VideoForm cancel={cancel} submit={submit} initialValues={{ name: '', catIds: [], authorId: -1 }} />
    </>
  );
};
export default AddVideoPage;
