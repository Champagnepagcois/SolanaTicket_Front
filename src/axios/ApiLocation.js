const ApiLocation =() =>{
    const {RAPIDAPI_APP_API_URL} = process.env;
    const axiosInstance = axios.create({
        baseURL: RAPIDAPI_APP_API_URL,
        responseType:"json"
    });
    return axiosInstance;
}