import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setCode, setLanguage } from "../slices/languageSlice";
import { useState } from "react";
import { SaveCode } from "../utils/CodeExecute";
import { useAuth } from "@clerk/clerk-react";

const EditorHeader = ({ executeCode,code }) => {
  const dispatch=useDispatch();
  const {language}=useSelector((state)=>state.languageSlice);
  const {userId}=useAuth();
  console.log(language)
  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 -mt-5 bg-gray-800  h-12">
      <div className="flex items-center">
        <button
          className=" font-semibold bg-green-700 text-white -ml-6  mx-6 w-[90px] h-[46px]"
          onClick={executeCode}
        >
          {" "}
          <i class="fas fa-play mr-2"></i>Run
        </button>
        <select className="font-semibold border-gray-800 text-white bg-gray-800 -ml-2 p-1 w-24" value={language} onChange={(e)=>{
          dispatch(setCode(''));
          dispatch(setLanguage(e.target.value))
        }}>
          <option
            value="c"
            className="font-semibold text-gray-800 bg-white my-20 mx-2"
          >
            C
          </option>
          <option
            value="c++"
            className="font-semibold text-gray-800 bg-white my-1 mx-2"
          >
            C++
          </option>
          <option
            value="python"
            className="font-semibold text-gray-800 bg-white my-1 mx-2"
          >
            Python
          </option>
          <option
            value="java"
            className="font-semibold text-gray-800 bg-white my-1 mx-2"
          >
            Java
          </option>
          <option
            value="html"
            className="font-semibold text-gray-800 bg-white my-1 mx-2"
          >
            HTML/CSS/JS
          </option>
        </select>
        <button className=" font-semibold bg-green-700 text-white ml-2  mx-6 w-[90px] h-[46px]" onClick={()=>dispatch(SaveCode(code,language,userId))}>Save</button>
      </div>
    </nav>
  );
};

export default EditorHeader;
