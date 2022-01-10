import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice';
import jwtReducer from './jwtSlice';

export default configureStore({
  reducer: {
    librarian: booksReducer,
    jwt: jwtReducer
  },
});
