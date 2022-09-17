import { createSlice } from '@reduxjs/toolkit';
import CategoriesAsyncActions from './async';
import { CategoriesState } from './types';

const initialState: CategoriesState = {
  categories: [],
};
const { GetAll } = CategoriesAsyncActions;
export const categoriesSlice = createSlice({
  initialState,
  name: 'categories',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAll.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export default categoriesSlice.reducer;
