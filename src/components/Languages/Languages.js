import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import './Languages.css';

export const Languages = ({source, setSource, target, setTarget, languages}) => {
  

  const handleChangeFrom = (event) => {
    setSource(event.target.value);
  };

   const handleChangeTo = (event) => {
    setTarget(event.target.value);
  };

  const handleSwitch = () => {
    const permut = source;
    setSource(target);
    setTarget(permut);
  }

  return (
    <div className="header">

      <div className='title'>
        Translate
      </div>

      <div className='form'>
        <TextField
          select
          label="Source"
          value={source}
          onChange={handleChangeFrom}
          variant="outlined"
          className='select'
        >
          {languages.map((option) => (
            <MenuItem key={option.language} value={option.language}>
              {option.language}
            </MenuItem>
          ))}
        </TextField>
        
        <Button variant="outlined" onClick={handleSwitch}>
          <ImportExportIcon className="switch-icon" />
        </Button>

        
         <TextField
          select
          label="Target"
          value={target}
          onChange={handleChangeTo}
          variant="outlined"
          className='select'
        >
          {languages.map((option) => (
            <MenuItem key={option.language} value={option.language}>
              {option.language}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  )
}
