import { createSlice } from "@reduxjs/toolkit";

const initialState={
    languages:'javascript',
}

const languageSlice=createSlice({
    name:"language",
    initialState:initialState,
    reducers:{
        setLanguage(state,value){
            state.languages=value.payload
        }
    }
})

export const {setLanguage}=languageSlice.actions
export default languageSlice.reducer