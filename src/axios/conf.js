import axios from "axios";
const AxiosConfig = {};

AxiosConfig.ConfigApiSpotify = axios.create({
  baseURL: `${process.env.REACT_APP_SPOTIFY_API_URL_BASE}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_APP_API_URL_KEY}`,
  },
  responseType: "json",
  data: {},
});

AxiosConfig.configApiRapidapi = axios.create({
  baseURL: `${process.env.REACT_APP_RAPIDAPI_API_URL_BASE}`,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
    "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_APP_API_URL_KEY}`,
  },
  responseType: "json",
  data: {},
});

export default AxiosConfig;
