import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import TextEditor from "./TextEditor";

const CreatePost = () => {
  const blogTitleRef = useRef(null)
  const editTagRef = useRef(null)
  const [editorValue, setEditorValue] = useState('')
  const [titleFieldValue, setTitleFieldValue] = useState('')

  const editorChange = (e) => {
    e.preventDefault()
    setEditorValue(e.target.innerText)
  }

  const tileField = (e) => {
    const field = e.target
    setTitleFieldValue(field.value)

    if (e.key === 'Enter' && field.value !== '') {
      editTagRef.current.focus()
      editTagRef.current.firstChild.focus()
      // editTagRef.current.removeChild(editTagRef.current.firstChild)

      console.log('work')
    }
  }


  useEffect(() => {
    const editorCountent = editTagRef.current

    const p = document.createElement('p')
    editorCountent.appendChild(p)

    const appandTag = (event) => {
        if (event.key === 'Enter') {
          const p = document.createElement('p')

          editorCountent.appendChild(p)
          console.log('work')
        }
    }

    editorCountent.addEventListener('keydown', appandTag)
    return () => {
      editorCountent.removeEventListener('keydown', appandTag);
    }
  }, [])


  useEffect(() => {
    const editorCountent = editTagRef.current

    const attachP_Tag = (event) => {
        if (event.key === 'Backspace') {
            const pTags = editorCountent.querySelectorAll('P');

            // If there's only one <p> tag and it's empty, prevent deletion
            if (pTags.length === 1 && pTags[0].textContent.trim() === '') {
                event.preventDefault();
            }
        }
    }

    editorCountent.addEventListener('keydown', attachP_Tag)
    return () => {
      editorCountent.removeEventListener('keydown', attachP_Tag);
    }
  }, [])
  

  return (
    <>
    {/* blog title */}
    <div className="my-5 max-w-[600px] mx-auto">
      <input 
        ref={blogTitleRef}
        onKeyDown={tileField}
        type="text" 
        className="text-4xl leading-[60px] py-2 app-outline-none" 
        placeholder="Your Blog Title..."
      />
    </div>
    
    {/* blog body with editor */}
    <div className="text-editor relative max-w-[600px] mx-auto">
      <p className={`${editorValue === '\n' || editorValue === ''  ? '' : 'hidden'} absolute top-0 -z-[1] text-lg text-gray-500`}>
        Write here your blog...
      </p>
      <div
        ref={editTagRef}
        contentEditable={true} 
        suppressContentEditableWarning={true}
        onInput={editorChange}
        className="text-editor-wrapper app-outline-none w-full min-h-28 text-lg"
      >
      
      </div>
    </div>
    

    <ReactQuill theme="snow"/>
    </>
  );
};

export default CreatePost;
