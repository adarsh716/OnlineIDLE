import { combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";

const rootReducer=combineReducers({
    languageSlice:languageSlice
})

export default rootReducer;