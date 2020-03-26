import axios from "axios";

const fetchData = async (query) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

  try {
    const result = await axios(API_URL);
    return result.data;
  } catch (error) {
    console.error(`Fetch error: ${error}`);
  }
};

export default fetchData;
