import React from 'react';


function ButtonElse({ movies, countMovies, more}) {
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
            }>Нет сохраненных фильмов</p>
        </div>
    )
}

export default ButtonElse;