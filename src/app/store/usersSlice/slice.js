import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null,
    auth: "",
    logged: false,
    created: false
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
        },

        AuthRequestSuccess(state, { payload }) {
            state.logged = true;
            state.auth = payload;
        },

        AuthRequestFailed(state, { payload }) {
            state.error = payload;
        },

        CreateUserRequestSuccess(state, { payload }) {
            state.created = true;
            state.items?.push(payload);
        },

        UserLogOut(state) {
            state.auth = null;
            state.logged = false;
        },

        UpdateUsers(state, { payload }) {
            if (state.items) {
                const updatedIndex = state.items.findIndex(
                    (el) => el._id === payload._id
                );
                state.items[updatedIndex] = { ...payload };
            }
        }
    }
});

export const {
    UsersRequested,
    UsersRequestSuccess,
    UsersRequestFailure,
    AuthRequestSuccess,
    AuthRequestFailed,
    CreateUserRequestSuccess,
    UserLogOut,
    UpdateUsers
} = UsersSlice.actions;

export default UsersSlice.reducer;
