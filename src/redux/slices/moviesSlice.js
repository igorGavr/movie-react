import {createSlice} from "@reduxjs/toolkit"
import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    page:null,
    movies:null,
    curentMovies:null,
    genres:[]
}

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page})=>{
        const {data} = await movieService.getAllMovie(page)
        return data
    }
)
const getGenres = createAsyncThunk(
    "moviesSlice/getGenres",
    async ()=> {
        const {data} = await movieService.getGenres()
        return data
    }
)
const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        getCurentMovies:((state, action) => {
            state.curentMovies = action.payload.title
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
                const {page, results} = action.payload
                state.pages = page
                state.movies = results
                state.curentMovies = false
            } ))
            .addCase(getGenres.fulfilled, ((state, action) => {
                state.genres = action.payload.genres
            }))
    }

})

const {reducer: moviesReducer, actions:{getCurentMovies}} = moviesSlice

const moviesActions = {
    getAll,
    getCurentMovies,
    getGenres
}

export {
    moviesReducer,
    moviesActions
}
