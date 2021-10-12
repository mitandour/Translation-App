import './App.css';
import Container from '@mui/material/Container';
import { Languages } from './components/Languages/Languages';
import { Translation } from './components/Translation/Translation';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;


function App() {
  const [textFrom, setTextFrom] = useState("");
  const [textTo, setTextTo] = useState("");
  const [transFrom, setTransFrom] = useState('en');
  const [transTo, setTransTo] = useState('fr');
  const [languages, setLanguages] = useState([]);


  const getLanguages = () => {
    console.log(RAPID_API_KEY);
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
      "method": "GET",
      "headers": {
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": RAPID_API_KEY,
      }
    })
      .then(response => response.json())
      .then(data => setLanguages(data.data.languages))
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
          languages={languages}
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
