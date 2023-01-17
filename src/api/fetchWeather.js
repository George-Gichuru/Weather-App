import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "94b0effcba32bde6b3579c17b06e2e6a";


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params : {
            q: query,
            units: "metrics",
            APPID: API_KEY,
        }
    });

    return data
}