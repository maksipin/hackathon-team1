import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {},
    redusers: {}
});

const { reducer: teamReducer, actions } = teamSlice;

export default teamReducer;
