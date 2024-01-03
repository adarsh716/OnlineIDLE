import React from 'react'
import Header from './Header'
import { Editor } from '@monaco-editor/react'
import { useRef } from 'react'

const HomePage = () => {
    const editRef = useRef(null);
    function handleEditorMount(editor, monaco) {
        editRef.current = editor;
    }
    const handleSumit = async () => {

    }
    return (
        <div className=' h-[100vh] w-[100vw] overflow-hidden flex flex-col'>
            <Header />
            <div className='flex flex-row h-[90vh] w-[100vw] -mt-5'>
                <Editor
                    defaultLanguage='cpp'
                    className=' h-[100%] m-0'
                    width={"80%"}
                    theme='vs-dark'
                    onMount={handleEditorMount}
                />
                <div className='flex flex-col h-[90vh] w-[80vw]'>
                    <textarea className=' bg-black opacity-90 h-[50%] w-[50vw] text-white'>

                    </textarea>
                    <textarea className=' bg-black opacity-70 h-[50%] w-[50vw] text-white'>

                    </textarea>
                </div>
            </div>

        </div>
    )
}

export default HomePage