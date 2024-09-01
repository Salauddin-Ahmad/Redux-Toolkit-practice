import {cofigureStore} from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";


export const store = cofigureStore({
  reducer:  {
    books: bookReducer,
  }  
})