import axios from "axios";

const api = axios.create({
    baseURL : "https://restcountries"
});

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
};