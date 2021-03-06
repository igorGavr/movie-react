import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAllMovie: (page = 1) => axiosService.get(urls.movie, {params: {page}}),
    getGenres: ()=> axiosService.get(urls.genres),
    getMoviesWithGenre:(page=1, with_genres) => axiosService.get(urls.movie, {params: {page, with_genres}})
}

export {movieService}
