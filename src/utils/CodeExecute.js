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