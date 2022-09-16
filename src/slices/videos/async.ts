import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProcessedVideo } from '../../common/interfaces';
import VideosServices from '../../services/videos';

const GetAll = createAsyncThunk<ProcessedVideo[], void>('videos/getAll', async (_) => {
    return await VideosServices.Get();

});
const VideosAsyncActions = { GetAll };
export default VideosAsyncActions;
