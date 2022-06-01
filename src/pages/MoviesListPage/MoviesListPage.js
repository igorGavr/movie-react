import React from 'react';

import css from './moviesListPage.module.css'
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";

const MoviesListPage = () => {
    return (
        <div className={css.moviesListPage}>
            <MoviesListCard/>
        </div>
    );
};

export {MoviesListPage};
