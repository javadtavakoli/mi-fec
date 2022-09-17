import { createSlice } from '@reduxjs/toolkit';
import AuthorsAsyncActions from './async';
import { AuthorsState } from './types';

const initialState: AuthorsState = {
  authors: [],
};
const { GetAll } = AuthorsAsyncActions;
export const authorsSlice = createSlice({
  initialState,
  name: 'authors',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAll.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
  },
});
export default authorsSlice.reducer;
