import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../common/interfaces';
import CategoriesServices from '../../services/categories';

const GetAll = createAsyncThunk<Category[], void>('categories/getAll', async (_) => {
  const categoriesResponse = await CategoriesServices.Get();
  return categoriesResponse.data;
});
const CategoriesAsyncActions = { GetAll };
export default CategoriesAsyncActions;
