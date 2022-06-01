import axios from "axios";
import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUwYWVlOTU0OWE0NmMzY2U1ZGJiM2Q0M2YwZjJlOSIsInN1YiI6IjYyODc4Nzc5ZWM0NTUyNzRjMjg2MDhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vl7vLLjrvr-3ddQjjIQLhdtW9yYQdWk5N0M0Qbbt-9M'
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export {axiosService}
