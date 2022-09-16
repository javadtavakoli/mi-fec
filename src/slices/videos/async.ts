import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProcessedVideo } from '../../common/interfaces';
import VideosServices from '../../services/videos';

const GetAll = createAsyncThunk<ProcessedVideo[], void>('videos/getAll', async (_) => {
  return await VideosServices.Get();
});
const Search = createAsyncThunk<ProcessedVideo[], string>('videos/search', async (search) => {
  return await VideosServices.Search(search);
});
const VideosAsyncActions = { GetAll, Search };
export default VideosAsyncActions;
