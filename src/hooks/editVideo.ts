import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Author, Video } from '../common/interfaces';
import FindVideoAuthor from '../common/utils/findVideoAuthor';
import { VideoFormValues } from '../components/videoForm/type';
import AuthorsAsyncActions from '../slices/authors/async';
import useLoadAuthors from './loadAuthors';
import useLoadCategories from './loadCategories';
import { useAppDispatch } from './reduxHooks';

const useEditVideo = (videoId: number) => {
  useLoadCategories();
  const [initialVideo, setInitialVideo] = useState<VideoFormValues>();
  const dbVideo = useRef<Video>();
  const dbAuthor = useRef<Author>();
  const { authors } = useLoadAuthors();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToVideos = () => {
    navigate('/videos');
  };
  useEffect(() => {
    if (!initialVideo) fillInitialVideo();
  }, [authors]);
  const fillInitialVideo = () => {
    if (authors.length > 0) {
      const [video, author] = FindVideoAuthor.ByVideoId(authors, videoId);
      setInitialVideo({
        authorId: author.id,
        catIds: video.catIds,
        name: video.name,
      });
      dbVideo.current = video;
      dbAuthor.current = author;
    }
  };

  const cancel = () => {
    goToVideos();
  };
  const submit = async (values: VideoFormValues) => {
    if (!dbVideo.current || !dbAuthor.current) return;
    const editedVideo: Video = { ...dbVideo.current, name: values.name, catIds: values.catIds.map((c) => +c) };
    // If the author was changed
    if (dbAuthor.current.id !== +values.authorId) {
      const authorToAdd = authors.find((a) => a.id === +values.authorId);
      if (!authorToAdd) return;
      const removedVideoAuthor: Author = { ...dbAuthor.current, videos: dbAuthor.current.videos.filter((v) => v.id !== videoId) };
      const addedVideoAuthor: Author = { ...authorToAdd, videos: authorToAdd?.videos.concat(editedVideo) };
      await dispatch(AuthorsAsyncActions.Update(removedVideoAuthor));
      await dispatch(AuthorsAsyncActions.Update(addedVideoAuthor));
    } else {
      const videoIndexOnAuthor = dbAuthor.current.videos.findIndex((v) => v.id === videoId);
      const editedAuthor: Author = { ...dbAuthor.current, videos: [...dbAuthor.current.videos] };
      editedAuthor.videos[videoIndexOnAuthor] = editedVideo;
      await dispatch(AuthorsAsyncActions.Update(editedAuthor));
    }
    goToVideos();
  };
  return { submit, cancel, initialVideo };
};
export default useEditVideo;
