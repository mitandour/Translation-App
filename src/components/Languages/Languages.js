import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import './Languages.css';

export const Languages = ({transFrom, setTransFrom, transTo, setTransTo, languages, handleTranslation}) => {
  

  const handleChangeFrom = (event) => {
    setTransFrom(event.target.value);
  };

   const handleChangeTo = (event) => {
    setTransTo(event.target.value);
  };

  const handleSwitch = () => {
    const permut = transFrom;
    setTransFrom(transTo);
    setTransTo(permut);
  }

  useEffect(() => {
    //alert(`translating ${transFrom} to ${transTo}`);
  }, [transFrom, transTo])

  return (
    <div className="header">

      <div className='title'>
        Translate
      </div>

      <div className='form'>
        <TextField
          select
          label="Source"
          value={transFrom}
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
          value={transTo}
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
