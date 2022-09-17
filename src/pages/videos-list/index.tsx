import { Formik, FormikProps, Form, Field, FieldProps } from 'formik';
import { VideosTable } from '../../components/videos-table';
import useDeleteVideo from '../../hooks/deleteVideo';
import useLoadVideos from '../../hooks/loadVideos';
import { SearchVideosValues } from './types';
import styles from './videos-list.module.css';
const VideosListPage = () => {
  const { videos, search, searchVideos } = useLoadVideos();
  const { deleteVideo } = useDeleteVideo();
  return (
    <>
      <h1>VManager Demo v0.0.1</h1>

      <Formik initialValues={{ search }} onSubmit={searchVideos}>
        {(props: FormikProps<SearchVideosValues>) => (
          <Form>
            <div className={styles.searchBox}>
              <Field name="search" id="search">
                {({ field }: FieldProps<string>) => <input className={styles.searchInput} {...field} />}
              </Field>
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <VideosTable videos={videos} deleteVideo={deleteVideo} />
    </>
  );
};
export default VideosListPage;
