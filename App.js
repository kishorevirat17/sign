import './App.css';
import React, { useState,useEffect } from 'react';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [abc, setAbc] = useState("")

  useEffect(() => {

   setAbc (`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
    
    `)
    
    
  }, [html,css,js]);


  return (
    <>
    <div className="top">
      <Editor title='Html' lang='xml'value={html} onChange={setHtml}  />
      <Editor title='Css' lang='css' value={css} onChange={setCss} />
      <Editor title='Js' lang='javascript' value={js} onChange={setJs} />
    </div>
    <div className='bottom'>
      <h2>Output</h2>
      <iframe srcDoc={abc} title='output' sandbox='allow-scripts' width='100%' height='100%' />
    </div>
    </>
    
  );
}

export default App;
