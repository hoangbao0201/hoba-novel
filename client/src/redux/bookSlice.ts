import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookLoading: true,
    booksUser: null,

    bookUserEdit: null,

};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getMyBooks: (state, action) => {
            state.bookLoading = false
            state.booksUser = action.payload
        },
        bookUserEditHandle: (state, action) => {
            state.bookLoading = false
            state.bookUserEdit = action.payload
        }
    },
});

export const { getMyBooks, bookUserEditHandle } = bookSlice.actions;

export default bookSlice.reducer;
