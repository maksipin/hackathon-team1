import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Slices
import usersReducer from "./usersSlice/slice";

const rootReducer = combineReducers({ users: usersReducer });

export const store = configureStore({ reducer: rootReducer });
