import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    userLoading: true,
    isAuthenticated: false,
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // loginStart: (state) => {
        //     state.loading = true;
        // },
        loginSuccess: (state, action) => {
            state.userLoading = false;
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        loginUser: (state, action) => {
            state.userLoading = false;
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.userLoading = false;
            state.isAuthenticated = false;
            state.currentUser = null;
            Cookies.remove("A_token");
        },
    },
});

export const { loginSuccess, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
