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
        linkName,
        handleSubmit,
        isValid
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
            <form
                name="info"
                noValidate
                onSubmit={handleSubmit}
                action="#"
            >
                {children}
                <button className={`${
                    isValid ? "auth__button" : "auth__button auth__button_disabled"
                  }`}
                  disabled={`${
                    isValid ? "" : "disabled"
                  }`}
                    type="submit"
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