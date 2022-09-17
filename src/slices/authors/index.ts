import { createSlice } from '@reduxjs/toolkit';
import AuthorsAsyncActions from './async';
import { AuthorsState } from './types';

const initialState: AuthorsState = {
  authors: [],
};
const { GetAll, Update } = AuthorsAsyncActions;
export const authorsSlice = createSlice({
  initialState,
  name: 'authors',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAll.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
    builder.addCase(Update.fulfilled, (state, action) => {
      const changedAuthorIndex = state.authors.findIndex((author) => author.id === action.payload.id);
      if (changedAuthorIndex !== -1) {
        state.authors[changedAuthorIndex] = action.payload;
        return;
      }
      state.authors.push(action.payload);
    });
  },
});
export default authorsSlice.reducer;
