import React from 'react';


function ButtonElse(props) {
    const { 
        movies, 
        countMovies, 
        more} = props;
    return (
        <div className='movies-button'>
            <button 
            onClick={more}
            className={
                movies.length <= 12 || countMovies >= movies.length
                    ? "movies-button__button_hidden"
                    : "movies-button__button"
            }>
                    Ещё
            </button>
            <p className={
                movies.length === 0 
                    ? "movies-not__button"
                    : "movies-not__button_hidden"
            }>Фильмы не найдены</p>
        </div>
    )
}

export default ButtonElse;