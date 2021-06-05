import React from 'react';
import Header from '../General/Header/Header';
import Footer from '../General/Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';


function SavedMovies(props) {
    const {
        searchMoviesButton,
        handleCheckbox,
        checkbox,
        moviesFind,
        like,
        likeMovies,
        deleteLike,
        searchMovies,
        searche,
        showLikeMovies,
        preloader
    } = props;
    return (
        <>
            <Header showLikeMovies={showLikeMovies} />
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
                searchMovies={searchMovies}
                searche={searche}
            />
            <Footer />
        </>
    )
}

export default SavedMovies;