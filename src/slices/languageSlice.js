import { createSlice } from "@reduxjs/toolkit";

const initialState={
    languages:'javascript',
    loading:false
}

const languageSlice=createSlice({
    name:"language",
    initialState:initialState,
    reducers:{
        setLanguage(state,value){
            state.languages=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        }
    }
})

export const {setLanguage,setLoading}=languageSlice.actions
export default languageSlice.reducer
