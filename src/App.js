import './App.css';
import Container from '@mui/material/Container';
import { Languages } from './components/Languages/Languages';
import { Translation } from './components/Translation/Translation';
import { useState, useEffect } from 'react';

function App() {
  const [textFrom, setTextFrom] = useState("");
  const [textTo, setTextTo] = useState("");
  const [transFrom, setTransFrom] = useState('EUR');
  const [transTo, setTransTo] = useState('USD');
  
  const getLanguages = () => {
   fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
      "method": "GET",
      "headers": {
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "095cd97d1fmshbc9a085352e7e4ap1800fajsn1f59ab6988d1",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => console.log("data", data))
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getLanguages();
  }, [])

  const handleTranslation = () => {
    
  }

  useEffect(() => {
    setTextTo("translating here....");
  }, [textFrom])

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        color: "#282c34"
      }}>
      <Container
        maxWidth="md"
        style={{
          height: "100vh",
          color: "white"
        }}
      >
        <Languages
          transFrom={transFrom}
          setTransFrom={setTransFrom}
          transTo={transTo}
          setTransTo={setTransTo}
          handleTranslation={handleTranslation} />
        <Translation
          textFrom={textFrom}
          setTextFrom={setTextFrom}
          textTo={textTo}
        />
      </Container>
    </div>
  );
}

export default App;
