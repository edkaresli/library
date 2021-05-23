import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from './BooksAPI';

export const GetAllBooks = createAsyncThunk(
  "books/getAllBooks",
  async () => {
    const data = await getAll();
    return data;
  }
)