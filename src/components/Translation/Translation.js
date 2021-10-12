import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './Translation.css';

export const Translation = ({ textFrom, setTextFrom, textTo }) => {

  const handleTextChange = (e) => {
    setTextFrom(e.target.value);
  }

  return (
    <div className="translations">
      <TextareaAutosize
        className="text-translation"
        minRows={15}
        aria-label="maximum height"
        placeholder="Translate from..."
        value={textFrom}
        onChange={handleTextChange}
      />
      <TextareaAutosize
        className="text-translation"
        minRows={15}
        aria-label="maximum height"
        placeholder="Translate to..."
        value={textTo}
    />
    </div>
  )
}
