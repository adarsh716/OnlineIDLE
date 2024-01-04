import React, { useState } from 'react'
import Header from './Header'
import MonacoEditor from 'react-monaco-editor'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { CppCodeExecution } from '../utils/CodeExecute'
import { useAuth } from '@clerk/clerk-react';
import EditorHeader from './EditorHeader'

const HomePage = () => {
  const { userId } = useAuth();

    const [code,setCode]=useState("");
    const editRef = useRef(null);
    const dispatch=useDispatch();
    const [inputValue,setinputValue]=useState('');
    const [loading,setloading]=useState(false);
    const [output,setOutput]=useState('');
    const handleSumit = async () => {
        const executeCode=code;
        dispatch(CppCodeExecution("cpp",executeCode,'',setOutput));
    }
    return (
        <div className=' h-[100vh] w-[100vw] overflow-hidden flex flex-col'>
            <Header />
            {userId && (
            <EditorHeader executeCode={handleSumit} />
            )}
            <div className='flex flex-row h-[90vh] w-[100vw] -mt-5'>
                <MonacoEditor
                    language="javascript"
                    className=' h-[100%] m-0'
                    width={"80%"}
                    value={code}
                    theme='vs-dark'
                    onChange={setCode}
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