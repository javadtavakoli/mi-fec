import { createAsyncThunk } from '@reduxjs/toolkit';
import { Author } from '../../common/interfaces';
import AuthorsServices from '../../services/authors';

const GetAll = createAsyncThunk<Author[], void>('authors/getAll', async (_) => {
  const authorsResponse = await AuthorsServices.Get();
  return authorsResponse.data;
});
const AuthorsAsyncActions = { GetAll };
export default AuthorsAsyncActions;
