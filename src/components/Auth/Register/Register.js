import React from 'react';
import Auth from '../Auth';

function Register(props) {
    const {
        onRegister
    } = props;

    const [profile, setProfile] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [name, setName] = React.useState('');

    // // const [errorsEmail, setErrorsEmail] = React.useState({});
    // // const [errorsPassword, setErrorsPassword] = React.useState({});
    
    const [errors, setErrors] = React.useState({});

    const [valid, setValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(profile);
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
                heading="Добро пожаловать!"
                submitButtonText="Зарегестироваться"
                info="Уже зарегистрированы?"
                link="/signin"
                linkName="Войти"
                handleSubmit={handleSubmit}
                isValid={valid}
            >

                <label>
                    <p className="auth__p">Имя</p>
                    <input
                        className={errors.name === '' ? "auth__input" : "auth__input auth__input_desabled"}
                        value={profile.name}
                        onChange={change}
                        type="text"
                        name="name"
                        placeholder=""
                        required
                        minLength="4"
                        maxLength="15"
                    />
                    <span className="auth__span">{errors.name}</span>
                </label>
                <label>
                    <p className="auth__p">E-mail</p>
                    <input
                        className={errors.email === '' ? "auth__input" : "auth__input auth__input_desabled"}
                        value={profile.email}
                        onChange={change}
                        type="email"
                        name="email"
                        placeholder=""
                        required minLength="5"
                        maxLength="40" />
                    <span className="auth__span">{errors.email}</span>
                </label>
                <label>
                    <p className="auth__p">Пароль</p>
                    <input
                        className={errors.password === '' ? "auth__input" : "auth__input auth__input_desabled"}
                        value={profile.password}
                        onChange={change}
                        type="password"
                        name="password"
                        placeholder=""
                        required minLength="5"
                        maxLength="20" />
                    <span className="auth__span">{errors.password}</span>
                </label>
            </Auth>
        </>
    )
}

export default Register;