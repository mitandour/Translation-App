import './App.css';
import Container from '@mui/material/Container';
import { Languages } from './components/Languages/Languages';
import { Translation } from './components/Translation/Translation';
import { useState, useEffect } from 'react';
import { getLanguages } from './API/API';
import { handleTranslation } from './API/API';

function App() {
  const [textSource, setTextSource] = useState("");
  const [textTarget, setTextTarget] = useState("");
  const [source, setSource] = useState('en');
  const [target, setTarget] = useState('fr');
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getLanguages()
      .then(response => response.json())
      .then(data => setLanguages(data.data.languages))
      .catch(err => {
        console.error(err);
      });
  }, [])

  const translate = () => {
    handleTranslation(textSource, target, source)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.data) {
          const translation = data.data.translations[0].translatedText;
          setTextTarget(translation);
        }
      })
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
          handleTranslation={translate}
        />
      </Container>
    </div>
  );
}

export default App;
