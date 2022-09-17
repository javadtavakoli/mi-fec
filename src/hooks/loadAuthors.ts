import { useEffect } from 'react';
import AuthorsAsyncActions from '../slices/authors/async';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useLoadAuthors = () => {
  const dispatch = useAppDispatch();
  const { authors } = useAppSelector((state) => state.authors);
  useEffect(() => {
    loadAuthors();
  }, []);
  const loadAuthors = async () => {
    await dispatch(AuthorsAsyncActions.GetAll());
  };
  return { authors };
};
export default useLoadAuthors;
