import './App.css';
import Container from '@mui/material/Container';
import { Languages } from './components/Languages/Languages';
import { Translation } from './components/Translation/Translation';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';

dotenv.config();

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const headers = {
  "accept-encoding": "application/gzip",
  "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  "x-rapidapi-key": RAPID_API_KEY,
};

function App() {
  const [textSource, setTextSource] = useState("");
  const [textTarget, setTextTarget] = useState("");
  const [source, setSource] = useState('en');
  const [target, setTarget] = useState('fr');
  const [languages, setLanguages] = useState([]);


  const getLanguages = () => {
    console.log(RAPID_API_KEY);
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
      "method": "GET",
      "headers": headers
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
    const body = {
      "q": textSource,
      "target": target,
      "source": source
    }
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2", {
      "method": "POST",
      "headers": headers,
      "body": body
    })
      .then(response => response.json())
      .then(data => console.log(data))
    .catch(err => {
      console.error(err);
    });
  }
  

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
          source={source}
          setSource={setSource}
          target={target}
          setTarget={setTarget}
          languages={languages}
        />
        <Translation
          textSource={textSource}
          setTextSource={setTextSource}
          textTarget={textTarget}
          handleTranslation={handleTranslation}
        />
      </Container>
    </div>
  );
}

export default App;
