import React, { useEffect, useState } from 'react'
import Header from './Header'
import MonacoEditor from 'react-monaco-editor'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { C_codeExecution, CppCodeExecution, SaveCode, py_codeExecution ,javacodeExecution} from '../utils/CodeExecute'
import { useAuth } from '@clerk/clerk-react';
import EditorHeader from './EditorHeader'

const HomePage = () => {
    const { userId } = useAuth();
    const {language}=useSelector((state)=>state.languageSlice);
    const [code,setcode]=useState(localStorage.getItem("code") ?(localStorage.getItem("code")):'');
    const editRef = useRef(null);
    const dispatch=useDispatch();
    const [inputValue,setinputValue]=useState('');
    const [loading,setloading]=useState(false);
    const [output,setOutput]=useState('');
    const handleSumit = async () => {
        console.log("inside handle submit");
        const executeCode=code;
        console.log("Code is ",code);
        if(language==="c"){
            dispatch(C_codeExecution(language,code,inputValue,setOutput));
        }
        if(language==="c++"){
            dispatch(CppCodeExecution(language,code,inputValue,setOutput));
        }
        if(language==="python"){
            dispatch(py_codeExecution(language,code,inputValue,setOutput));
        }
        if(language==="java"){
            dispatch(javacodeExecution(language,code,inputValue,setOutput));
        }
    }
    const handleMount=(editor, monaco)=>{
        console.log("Inside handle mount")
        editRef.current=monaco
        setcode(editRef.current);
    }
    useEffect(()=>{
        console.log(code);
        localStorage.setItem('code',code);
    },[code])
    return (
        <div className=' h-[100vh] w-[100vw] overflow-hidden flex flex-col'>
            <Header />
            {userId && (
            <EditorHeader executeCode={handleSumit} code={code} />
            )}
            <div className='flex flex-row h-[90vh] w-[100vw] -mt-5'>
                <MonacoEditor
                    language={language}
                    className=' h-[100%] m-0'
                    width={"80%"}
                    value={code}
                    options={{
                        fontSize:16,
                        lineNumbers:true,
                        automaticLayout:true,
                        selectOnLineNumbers: true,
                        cursorStyle: 'line',
                    }}
                    theme='vs-dark'
                    onChange={setcode}
                    onMount={handleMount}
                />
                <div className='flex flex-col h-[90vh] w-[80vw]'>
                    <textarea className=' bg-black opacity-90 h-[50%] w-[50vw] text-white' onChange={setinputValue}>

                    </textarea>
                    <textarea className=' bg-black opacity-70 h-[50%] w-[50vw] text-white' value={output} >
                        
                    </textarea>
                </div>
            </div>

        </div>
    )
}

export default HomePage
