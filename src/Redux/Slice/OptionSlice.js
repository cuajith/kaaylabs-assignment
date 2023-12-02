import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
    name: "option",
    initialState: "",
    reducers: {
        selectOption: (state, action) => action.payload,
    }
});

export const {selectOption} = optionSlice.actions;
export default optionSlice.reducer;