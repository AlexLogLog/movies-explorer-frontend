import React from 'react';
import logo from '../../images/logo.svg';
import { useHistory } from 'react-router-dom'

function Auth(props) {
    const {
        heading,
        children,
        submitButtonText,
        info,
        link,
        linkName
    } = props;
    const history = useHistory();
    return (
        <div className="auth">

            <img
                onClick={() => history.push('/')}
                className="header__logo"
                src={logo}
                alt="Логотип"
            ></img >
            <h1 className="auth__heading">{heading}</h1>
            <form name="info" noValidate>
                {children}
                <button className="auth__button"
                    type="submit"
                    onClick={() => history.push('/movies')}
                > {submitButtonText}
                </button>
                <p className="auth__text">{info}
                    <a className="auth__link" href={link}>{linkName}</a>
                </p>

            </form>

        </div>

    )
}

export default Auth;