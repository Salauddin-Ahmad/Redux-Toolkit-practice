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
    }
});



export default bookSlice.reducer; // imported from store as bookReducer 