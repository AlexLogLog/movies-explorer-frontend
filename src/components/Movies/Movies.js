import React from 'react';
import Header from '../General/Header/Header';
import Footer from '../General/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies(props) {
    const {
        searchMoviesButton,
        handleCheckbox,
        checkbox,
        moviesFind,
        like,
        likeMovies,
        deleteLike,
        showLikeMovies,
        preloader,
        loadAllMovies
    } = props;
    return (
        <>
            <Header showLikeMovies={showLikeMovies}/>
            <SearchForm
                checkbox={checkbox}
                handleCheckbox={handleCheckbox}
                searchMoviesButton={searchMoviesButton}
                preloader={preloader}
            />
            <MoviesCardList
                moviesFind={moviesFind}
                like={like}
                likeMovies={likeMovies}
                deleteLike={deleteLike}
                loadAllMovies={loadAllMovies}
            />
            <Footer />
        </>
    )
}

export default Movies;