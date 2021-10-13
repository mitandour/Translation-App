import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './Translation.css';

export const Translation = ({ textSource, setTextSource, textTarget, handleTranslation }) => {

  const handleTextChange = (e) => {
    setTextSource(e.target.value);
    handleTranslation();
  }

  return (
    <div className="translations">
      <TextareaAutosize
        className="text-translation"
        minRows={15}
        maxRows={15}
        aria-label="maximum height"
        placeholder="Translate from..."
        value={textSource}
        onChange={handleTextChange}
      />
      <TextareaAutosize
        className="text-translation"
        minRows={15}
        maxRows={15}
        aria-label="maximum height"
        placeholder="Translate to..."
        value={textTarget}
    />
    </div>
  )
}
