import React from 'react';
import Header from '../General/Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../General/Footer/Footer';

function Main({loggedIn, showLikeMovies}) {
    return (
        <>
            <div className="main__fon-baner">
                <Header loggedIn={loggedIn} showLikeMovies={showLikeMovies}/>
                <Promo />
            </div>
            <AboutProject />
            <div className="main__fon-techs">
                <Techs />
            </div>
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
}

export default Main;