import React from 'react';
import logo from '../../../images/logo.svg';
import icon from '../../../images/icon__header.svg'
import { useLocation, useHistory, Link } from 'react-router-dom'


function Header({ loggedIn, showLikeMovies }) {
    const { pathname } = useLocation();
    const history = useHistory();

    function handleUpdateSearch() {
        showLikeMovies();
    }
    function link(from) {
        if ('/' === from) {
            if (!loggedIn) {
                return (
                    <>
                        <button
                            className="header__link_link-not-auth"
                            onClick={() => history.push('/signup')}
                        >
                            Регистрация
                      </button>
                        <button
                            className="header__link_button-not-auth"
                            onClick={() => history.push('/signin')}
                        >
                            Войти
                      </button>
                    </>)
            } else {
                return (
                    <button
                        className="header__link_button-not-auth"
                        onClick={() => { history.push('/movies') }}
                    >
                        Фильмы
                    </button>
                )
            }

        } else if ('/movies' === from || '/saved-movies' === from || '/profile' === from) {
            return (
                <div className="header__login">
                    <input id="header__toggle" type="checkbox" />
                    <label className="header__btn" htmlFor="header__toggle">
                        <span></span>
                    </label>
                    <div className="header__link-toggle">
                        <div className="header__login-movies">
                            <Link
                                className="header__link-login header__link-login_no"
                                to='/'
                                onClick={() => handleUpdateSearch()}
                            >
                                Главная
                        </Link>
                            <Link
                                className="header__link-login header__link-login_active"
                                to='/movies'
                                onClick={() => handleUpdateSearch()}
                            >
                                Фильмы
                        </Link>
                            <Link to="/saved-movies" className="header__link-login">
                                Сохранённые фильмы
                        </Link>
                        </div>
                        <div className="header__profile">
                            <Link
                                className="header__profile-link"
                                to='/profile'
                                onClick={() => handleUpdateSearch()}
                            >
                                Аккаунт
                    </Link>
                            <button
                                className="header__profile-button"
                                src={icon}
                                alt="Иконка"
                                onClick={() => history.push('/profile')} ></button>
                        </div>
                    </div>
                </div>
            )
        }
    };
    return (
        <div className="header ">
            <img
                onClick={() => {
                    history.push('/');
                    handleUpdateSearch()
                }}
                className="header__logo"
                src={logo}
                alt="Логотип"
            ></img >
            <div className="header__link">
                {link(pathname)}
            </div>
        </div >
    )
}


export default Header;