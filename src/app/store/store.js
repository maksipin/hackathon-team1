import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Slices
import UsersSlice from "./usersSlice/slice";

const rootReducer = combineReducers({ users: UsersSlice });

export const store = configureStore({ reducer: rootReducer });
