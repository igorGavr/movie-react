import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {Genre} from "../../components/Genre/Genre";

const GenresPage = () => {
    const {genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.getGenres())
    })
    return (
        <div>
            <div>
                {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {GenresPage};
