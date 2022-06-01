import css from './header.module.css'

import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {curentMovies} = useSelector(state =>state.movies )

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'} className={css.link_movies}>Movies</NavLink>

            </div>

            {!curentMovies && <h1>The world of movies</h1>}
            {curentMovies && <h2 style={{color:'red'}}>
                {curentMovies}</h2>}
        </div>
    );
};

export {Header};
