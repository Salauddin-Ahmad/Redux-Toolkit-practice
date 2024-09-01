import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: 'X', author: 'salauddin', price: 12, quantity: 15 },
        { id: 2, title: 'Y', author: 'salauddin', price: 15, quantity: 80 },


    ]
};
const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        deleteBook: (state, action) => {
            const  id  = action.payload;
            state.books = state.books.filter((book) => book.id !== id)
        }
    }
});

export const {deleteBook} = bookSlice.actions



export default bookSlice.reducer; // imported from store as bookReducer 