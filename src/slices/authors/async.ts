import { createAsyncThunk } from '@reduxjs/toolkit';
import { Author } from '../../common/interfaces';
import AuthorsServices from '../../services/authors';

const GetAll = createAsyncThunk<Author[], void>('authors/getAll', async (_) => {
  const authorsResponse = await AuthorsServices.Get();
  return authorsResponse.data;
});
const Update = createAsyncThunk<Author, Author>('authors/update', async (author) => {
  const updateResponse = await AuthorsServices.Update(author);
  return updateResponse.data;
});
const AuthorsAsyncActions = { GetAll, Update };
export default AuthorsAsyncActions;
