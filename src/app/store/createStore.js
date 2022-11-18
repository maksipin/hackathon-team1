import teamReducer from "./team";
import { configureStore } from "@reduxjs/toolkit";

export function createStore() {
    return configureStore({
        reducer: teamReducer
    });
}
