import { toast } from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { setLoading } from "../slices/languageSlice";
import { endPoints } from "./api";

export function CppCodeExecution(language = "cpp", code, inputValue,setOutput) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoints.CPP_EXECUTION,{language,code,inputValue});
            console.log(response);
            setOutput(response.data);
        } catch (err) {
            console.log(err);
            console.error(err);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function C_codeExecution(language = "cpp", code, inputValue,setOutput){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoints.C_EXECUTION,{language,code,inputValue});
            console.log(response);
            setOutput(response.data.ans);
        } catch (err) {
            console.log(err);
            console.error(err);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function py_codeExecution(language = "py", code, inputValue,setOutput){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoints.PYTHON_EXECUTION,{language,code,inputValue});
            console.log(response);
            setOutput(response.data);
        } catch (err) {
            console.log(err);
            console.error(err);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function javacodeExecution(language = "java", code, inputValue,setOutput){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoints.JAVA_EXECUTION,{language,code,inputValue});
            console.log(response);
            setOutput(response.data);
        } catch (err) {
            console.log(err);
            console.error(err);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}

export function SaveCode(code,language,email){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        console.log(code,language,email);
        dispatch(setLoading(true));
        try {
            const response=await apiConnector("POST",endPoints.SAVE_CODE,{language,code,email});
            console.log(response);
            if(response.data.success){
                toast.success("Code Saved");
            }
        } catch (err) {
            console.log(err);
            console.error(err);
        }
        toast.dismiss(toastId);
        dispatch(setLoading(false));
    }
}