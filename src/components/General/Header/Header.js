import React from 'react';
import logo from '../../../images/logo.svg';
import icon from '../../../images/icon__header.svg'
import { useLocation, useHistory } from 'react-router-dom'


function Header() {
    const { pathname } = useLocation();
    const history = useHistory();
    function link(from) {
        if ('/' === from) {
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

        } else if ('/movies' === from || '/saved-movies' === from || '/profile' === from) {
            return (
                <div className="header__login">
                    <input id="header__toggle" type="checkbox" />
                    <label className="header__btn" htmlFor="header__toggle">
                        <span></span>
                    </label>
                    <div className="header__link-toggle">
                        <div className="header__login-movies">
                            <a
                                className="header__link-login header__link-login_no"
                                href='/'
                            >
                                Главная
                        </a>
                            <a
                                className="header__link-login header__link-login_active"
                                href='/movies'
                            >
                                Фильмы
                        </a>
                            <a
                                className="header__link-login"
                                href='/saved-movies'
                            >
                                Сохранённые фильмы
                        </a>
                        </div>
                        <div className="header__profile">
                            <a
                                className="header__profile-link"
                                href='/profile'
                            >
                                Аккаунт
                    </a>
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
                onClick={() => history.push('/')}
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