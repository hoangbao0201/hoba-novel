import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookLoading: true,
    booksUser: null,
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getMyBooks: (state, action) => {
            state.bookLoading = false
            state.booksUser = action.payload
        },
    },
});

export const { getMyBooks } = bookSlice.actions;

export default bookSlice.reducer;
