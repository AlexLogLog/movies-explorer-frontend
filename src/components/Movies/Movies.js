import React from 'react';
import Header from '../General/Header/Header';
import Footer from '../General/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonElse from './ButtonElse/ButtonElse'


function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <ButtonElse />
            <Footer />
        </>
    )
}

export default Movies;