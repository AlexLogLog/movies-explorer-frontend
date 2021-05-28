import React from 'react';
import Auth from '../Auth';

function Login() {
    return (
        <>
            <Auth
                heading="Рады видеть!"
                submitButtonText="Войти"
                info="Еще не зарегистрированы?"
                link="/signup"
                linkName="Регистрация"
            >
                <label >
                    <p className="auth__p">E-mail</p>
                    <input className="auth__input" type="text" name="email"  defaultValue="" required="2" maxLength="40" />
                    {/* <span className="auth__span">Что-то пошло не так...</span> */}
                </label>
                <label>
                    <p className="auth__p">Пароль</p>
                    <input className="auth__input" type="password" name="password" defaultValue="" required minLength="2" maxLength="10" />
                    {/* <span className="auth__span" >Что-то пошло не так...</span> */}
                </label>
            </Auth>
        </>
    )
}

export default Login;