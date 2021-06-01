import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'



const Editor = ({lang,title,value,onChange}) => {
    function handleChange(editor,data,value) {
        onChange(value);
    }
    return (
        <div className="editor">
     <div>
           {title}
           </div>
               <CodeMirror onBeforeChange={handleChange} value={value} className='codemirrorwrap' options={{
                   
                   lineWrapping:true,lint:true,mode: lang,theme:'material',lineNumbers:true
               }} />
           
        </div>
    )
}

export default Editor
