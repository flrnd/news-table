import axios from "axios";

const API = "https://newsapi.org/v2";
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchData = async (query) => {
  const url = `${API}/everything?q=${query}&apiKey=${API_KEY}`;
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(`Fetch error: ${error}`);
  }
};

export default fetchData;
