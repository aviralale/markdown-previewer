import React from 'react'
import { useState } from 'react'
import { marked } from 'marked';
import './Markdown.css'
export default function Markdown() {
  const [markdown,setMarkdown] = useState("");
  const handleChange = (e) => {
    setMarkdown(e.target.value.replace(/\n/g, '  \n'));
  }
  const resetMarkdown = () => {
    setMarkdown('');
  }
  return (
    <div className='flex flex-wrap gap-5 w-[80vw] markdown-container'>
      <div className="flex flex-col w-full md:w-[48%] markdown-divs relative">
        <button disabled className="text-3xl text-white button">Markdown Input</button>
        <textarea id="markdown" className='text-white p-2' name="markdown" onChange={handleChange} value={markdown}>
          {console.log(markdown)}
        </textarea>
        {markdown !== '' && <button onClick={resetMarkdown} className='text-white reset-button'>Reset</button>}
      </div>
      <div className="flex flex-col w-full md:w-[48%] markdown-divs">
        <button className="text-3xl text-white button">Markdown Previewer</button>
        <div id="markdown" className='text-white p-2' dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
      </div>
    </div>
  )
}
