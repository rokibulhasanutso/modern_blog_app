import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Add a newline character for new paragraphs
      setContent((prevContent) => prevContent + '\n');
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div 
        className='border' 
        contentEditable={true} 
        onKeyDown={handleKeyPress} 
        onInput={handleChange}
    >
      {content && content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />} {/* Render <br /> after the first line */}
          {line}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextEditor;
