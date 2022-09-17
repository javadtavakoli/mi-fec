import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProcessedVideo } from '../../common/interfaces';
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
  reducers: {
    add(state, action: PayloadAction<ProcessedVideo>) {
      state.videos.push(action.payload);
    },
    edit(state, action: PayloadAction<ProcessedVideo>) {
      const videoIndex = state.videos.findIndex((v) => v.id === action.payload.id);
      if (videoIndex === -1) return;
      state.videos[videoIndex] = action.payload;
    },
    delete(state, action: PayloadAction<number>) {
      state.videos = state.videos.filter((v) => v.id !== action.payload);
    },
  },
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
export const VideoActions = videosSlice.actions;
