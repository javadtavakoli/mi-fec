import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Author, ProcessedVideo, Video } from '../common/interfaces';
import FindVideoAuthor from '../common/utils/findVideoAuthor';
import { VideoFormValues } from '../components/videoForm/type';
import AuthorsAsyncActions from '../slices/authors/async';
import { VideoActions } from '../slices/videos';
import useLoadAuthors from './loadAuthors';
import useLoadCategories from './loadCategories';
import { useAppDispatch } from './reduxHooks';

const useEditVideo = (videoId: number) => {
  const { categories } = useLoadCategories();
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
    const editedProcessedVideo: ProcessedVideo = {
      author: dbAuthor.current.name,
      categories: editedVideo.catIds.map((cId) => categories.find((cat) => cat.id === cId)?.name || ''),
      highestQualityFormat: {
        formatName: Object.keys(editedVideo.formats)[0],
        res: Object.values(editedVideo.formats)[0].res,
        size: Object.values(editedVideo.formats)[0].size,
      },
      id: editedVideo.id,
      releaseDate: editedVideo.releaseDate,
      name: editedVideo.name,
    };
    // If the author was changed
    if (dbAuthor.current.id !== +values.authorId) {
      const authorToAdd = authors.find((a) => a.id === +values.authorId);
      if (!authorToAdd) return;
      const removedVideoAuthor: Author = { ...dbAuthor.current, videos: dbAuthor.current.videos.filter((v) => v.id !== videoId) };
      const addedVideoAuthor: Author = { ...authorToAdd, videos: authorToAdd?.videos.concat(editedVideo) };
      await dispatch(AuthorsAsyncActions.Update(removedVideoAuthor));
      await dispatch(AuthorsAsyncActions.Update(addedVideoAuthor));
      editedProcessedVideo.author = authorToAdd.name;
    } else {
      const videoIndexOnAuthor = dbAuthor.current.videos.findIndex((v) => v.id === videoId);
      const editedAuthor: Author = { ...dbAuthor.current, videos: [...dbAuthor.current.videos] };
      editedAuthor.videos[videoIndexOnAuthor] = editedVideo;
      await dispatch(AuthorsAsyncActions.Update(editedAuthor));
    }
    dispatch(VideoActions.edit(editedProcessedVideo));
    goToVideos();
  };
  return { submit, cancel, initialVideo };
};
export default useEditVideo;
