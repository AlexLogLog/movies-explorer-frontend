import React from 'react';
import Auth from '../Auth';

function Login({ onLogin }) {

    const [profile, setProfile] = React.useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = React.useState({});

    const [valid, setValid] = React.useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        onLogin(profile);
        setValid(false);

    }
    
    const change = (evt) => {
        setProfile({ ...profile, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
        setValid(evt.target.closest("form").checkValidity());
    }

    return (
        <>
            <Auth
                heading="Рады видеть!"
                submitButtonText="Войти"
                info="Еще не зарегистрированы?"
                link="/signup"
                linkName="Регистрация"
                handleSubmit={handleSubmit}
                isValid={valid}
            >
                <label >
                    <p className="auth__p">E-mail</p>
                    <input
                        className={errors.email === '' ? "auth__input" : "auth__input auth__input_desabled"}
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={change}
                        placeholder=""
                        required="5"
                        maxLength="40" />
                    <span className="auth__span">{errors.email}</span>
                </label>
                <label>
                    <p className="auth__p">Пароль</p>
                    <input
                        className={errors.password === '' ? "auth__input" : "auth__input auth__input_desabled"}
                        type="password"
                        name="password"
                        value={profile.password}
                        onChange={change}
                        placeholder=""
                        required minLength="5"
                        maxLength="20" />
                    <span className="auth__span" >{errors.password}</span>
                </label>
            </Auth>
        </>
    )
}

export default Login;