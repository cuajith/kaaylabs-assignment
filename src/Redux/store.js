import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice/DataSlice";
import optionReducer from "./Slice/OptionSlice";

const store = configureStore({
    reducer: {
      dataList: dataReducer,
      option: optionReducer
    }
})

export default store;