import { useEffect } from 'react';
import CategoriesAsyncActions from '../slices/categories/async';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useLoadCategories = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);
  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = async () => {
    await dispatch(CategoriesAsyncActions.GetAll());
  };
  return { categories };
};
export default useLoadCategories;
