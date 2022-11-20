import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        UsersRequested(state) {
            state.loading = true;
        },

        UsersRequestSuccess(state, { payload }) {
            state.loading = false;
            state.items = payload;
        },

        UsersRequestFailure(state, { payload }) {
            state.loading = false;
            state.error = payload;
        }
    }
});
const { reducer: usersReducer, actions } = UsersSlice;

export const { UsersRequested, UsersRequestSuccess, UsersRequestFailure } =
    actions;

export const getTeam = () => (state) => state.users.items;

export default usersReducer;
