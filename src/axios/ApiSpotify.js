import axios from "axios";

const apiSpotify =() =>{
    const {SPOTIFY_APP_API_URL} = process.env;
    const axiosInstance = axios.create({
        baseURL: SPOTIFY_APP_API_URL,
        responseType:"json"
    });
    return axiosInstance;
}