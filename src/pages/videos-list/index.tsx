import { Formik, FormikProps, Form, Field } from 'formik';
import { VideosTable } from '../../components/videos-table';
import useLoadVideos from '../../hooks/loadVideos';
import { SearchVideosValues } from './types';

const VideosListPage = () => {
  const { videos, search, searchVideos } = useLoadVideos();

  return (
    <>
      <h1>VManager Demo v0.0.1</h1>

      <Formik initialValues={{ search }} onSubmit={searchVideos}>
        {(props: FormikProps<SearchVideosValues>) => (
          <Form>
            <Field type="text" name="search" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
      <VideosTable videos={videos} />
    </>
  );
};
export default VideosListPage;
