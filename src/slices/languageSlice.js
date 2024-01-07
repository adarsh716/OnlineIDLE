import { createSlice } from "@reduxjs/toolkit";

const initialState={
    language:localStorage.getItem("language")||"python",
    loading:false,
    code:null,
}

const languageSlice=createSlice({
    name:"language",
    initialState:initialState,
    reducers:{
        setLanguage(state,value){
            localStorage.setItem("language",value.payload)
            state.language=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setCode(state,value){
            state.code=value.payload;
        }
    }
})

export const {setLanguage,setLoading,setCode}=languageSlice.actions
export default languageSlice.reducer