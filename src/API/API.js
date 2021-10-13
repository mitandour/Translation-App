import dotenv from 'dotenv';

dotenv.config();

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const BASE_URL = "https://google-translate1.p.rapidapi.com/";

const headers = {
  "accept-encoding": "application/gzip",
  "x-rapidapi-host": "google-translate1.p.rapidapi.com",
  "x-rapidapi-key": RAPID_API_KEY,
};

export const getLanguages = () => {
  return fetch( `${BASE_URL}language/translate/v2/languages`, {
    "method": "GET",
    "headers": headers
  });
}
  
export const handleTranslation = (textSource, target, source) => {
    const body = {
      "q": textSource,
      "target": target,
      "source": source
    }
  return fetch(`${BASE_URL}language/translate/v2`, {
    "method": "POST",
    "headers": headers,
    // @ts-ignore
    "body": body
  });
  }