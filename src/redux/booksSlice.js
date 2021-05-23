import { createSlice } from '@reduxjs/toolkit';
import { GetAllBooks } from '../services/thunks';

export const booksSlice = createSlice({
  name: 'librarian',
  initialState: {
    books: [],
    changed: false
  },
  reducers: {
    updateShelf: (state, action) => {
      state.books = action.payload;
      state.changed = !state.changed;
    }
  },
  extraReducers: {
    [GetAllBooks.fulfilled]: (state, action) => {      
      state.books = action.payload;
    },
    [GetAllBooks.rejected]: (state, action) => {
      state.books = [];
    },
  }
});

export const { updateShelf } = booksSlice.actions;

export default booksSlice.reducer;