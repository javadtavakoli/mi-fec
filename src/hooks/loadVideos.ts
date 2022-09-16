import { useEffect } from 'react';
import VideosAsyncActions from '../slices/videos/async';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useLoadVideos = () => {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state) => state.videos);
  useEffect(() => {
    loadAll();
  }, []);
  const loadAll = async () => {
    await dispatch(VideosAsyncActions.GetAll());    
  };
  return { videos };
};
export default useLoadVideos;
