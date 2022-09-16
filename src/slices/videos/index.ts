import { createSlice } from '@reduxjs/toolkit';
import VideosAsyncActions from './async';
import { VideosState } from './types';

const initialState: VideosState = {
  search: '',
  videos: [],
};
const { GetAll } = VideosAsyncActions;
export const videosSlice = createSlice({
  initialState,
  name: 'videos',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAll.fulfilled, (state, action) => {
      state.search = '';
      state.videos = action.payload;
    });
  },
});

export default videosSlice.reducer;
