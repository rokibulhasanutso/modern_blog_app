import { useEffect, useRef, useState } from "react";

const ContentEditable = () => {
  const articleTitleRef = useRef(null)
  const articleBodyRef = useRef(null)
  const [articleTitle, setArticleTitle] = useState("")
  const [articleBodyPlaceholder, setArticleBodyPlaceholder] = useState(true)

  const fontBlod = () => {
    const selection =  window.getSelection()

    if (!selection.isCollapsed) {
      const text = selection.toString()
      const range = selection.getRangeAt(0)
      const strong = document.createElement('strong')
      strong.textContent = text
      range.deleteContents()
      range.insertNode(strong)
    }
  }

  const unOrderList = () => {
    const selection =  window.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const ul = document.createElement('ul')
      const li = document.createElement('li')
      const br = document.createElement('br')
      li.appendChild(br)
      ul.appendChild(li)

      range.startContainer.replaceWith(ul)
    }
  }

  // article title
  const articleTileInput = () => {
    const articleTitle = articleTitleRef?.current?.value
    const title = articleTitle.charAt(0).toUpperCase() + articleTitle.slice(1)
    setArticleTitle(title)
  }

  const articleTitleKeydown = (e) => {
    const element = e.target

    if (articleTitleRef.current.value && e.key === 'Enter') {
      articleBodyRef?.current?.focus()

      const lastElement = articleBodyRef?.current.lastChild
      const range = document.createRange()
      const selection = window.getSelection()

      /* 
        * 1st argument is lastElement. It means article body last tag or element
        * 2nd argument is 1. It means element text last point selection
      */
      range.setStart(lastElement, 1)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  // article body
  const articleBodyKeydown = (e) => {
    const element = e.target

    if (e.key === 'Backspace') {
      const initialTag = element.querySelectorAll('p')

      if (initialTag.length === 1 && element.children.length === 1 && initialTag[0].textContent.trim() === '') {
        e.preventDefault()
      }

      setTimeout(() => {
        if (element.children[0].nodeName === 'BR') {
          const p = document.createElement('p')
          const br = document.createElement('br')
          p.appendChild(br)
          element.children[0].replaceWith(p)

          const selection = window.getSelection()
          const range = document.createRange()

          range.setStart(p, 1)
          selection.removeAllRanges()
          selection.addRange(range)
        }
      }, 0)
    }
  }

  const articleBodyInput = () => {
    let content = articleBodyRef?.current?.textContent

    if (content) {
      setArticleBodyPlaceholder(false)
    }
    else {
      setArticleBodyPlaceholder(true)
    }
  }

  useEffect(() => {
    articleTileInput()
  }, [])


  return (
    <>
    <div className="text-editor">
      {/* article title */}
      <div className="my-5 max-w-[600px] mx-auto">
        <input
          ref={articleTitleRef}
          className="text-4xl leading-[60px] py-2 app-outline-none" 
          placeholder="Tell your story title..."
          type="text"
          onInput={articleTileInput}
          onKeyUp={articleTitleKeydown}
          value={articleTitle}
        />
      </div>
      
      {/* article body */}
      <div
        ref={articleBodyRef}
        className={`text-editor-wrapper max-w-[600px] mx-auto ${articleBodyPlaceholder ? 'text-editor-body-placeholder' : ''}`} 
        contentEditable={true} 
        suppressContentEditableWarning={true}
        onKeyDown={articleBodyKeydown}
        onInput={articleBodyInput}
        data-gramm={false}
      >
        {/* initial tag p */}
        <p>
          <br/>
        </p>
      </div>
    </div>

    <button 
      className="border px-4 bg-slate-100"
      onClick={fontBlod}
    >
      Font Bold
    </button>

    <button 
      className="border px-4 bg-slate-100"
      onClick={unOrderList}
    >
      Un Order List
    </button>
    </>
  );
};

export default ContentEditable;