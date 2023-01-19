import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginUser: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
    },
});

export const { loginStart, loginUser } = userSlice.actions;

export default userSlice.reducer;
