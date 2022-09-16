import { createSlice } from '@reduxjs/toolkit';
import VideosAsyncActions from './async';
import { VideosState } from './types';

const initialState: VideosState = {
  search: '',
  videos: [],
};
const { GetAll, Search } = VideosAsyncActions;
export const videosSlice = createSlice({
  initialState,
  name: 'videos',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAll.fulfilled, (state, action) => {
      state.search = '';
      state.videos = action.payload;
    });
    builder.addCase(Search.fulfilled, (state, action) => {
      state.search = action.meta.arg;
      state.videos = action.payload;
    });
  },
});

export default videosSlice.reducer;
