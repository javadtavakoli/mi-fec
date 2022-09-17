import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories';
import videosReducer from './slices/videos';
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
