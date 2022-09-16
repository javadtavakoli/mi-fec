import { useEffect } from 'react';
import { SearchVideosValues } from '../pages/videos-list/types';
import VideosAsyncActions from '../slices/videos/async';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useLoadVideos = () => {
  const dispatch = useAppDispatch();
  const { videos, search } = useAppSelector((state) => state.videos);
  useEffect(() => {
    loadAll();
  }, []);
  const loadAll = async () => {
    await dispatch(VideosAsyncActions.GetAll());
  };
  const searchVideos = async (values: SearchVideosValues) => {
    if (values.search.trim() === '') {
      await loadAll();
      return;
    }
    await dispatch(VideosAsyncActions.Search(values.search));
  };
  return { videos, search, searchVideos };
};
export default useLoadVideos;
