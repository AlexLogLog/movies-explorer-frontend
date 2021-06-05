import React, { useContext, useEffect } from 'react';
import Header from '../../General/Header/Header';
import { CurrentUserContext } from "../../../contexts/CurrentUserContext.js"

function Profile(props) {
    const {
        exit,
        updateProfile,
        showLikeMovies
    } = props

    const currentUser = useContext(CurrentUserContext);


    const [profile, setProfile] = React.useState({
        email: "",
        name: "",
    });

    const [errors, setErrors] = React.useState({});

    const [valid, setValid] = React.useState(false);

    useEffect(() => {
        const newProf = {
            email: currentUser.email,
            name: currentUser.name
        }
        setProfile(newProf);
    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault();
        updateProfile(profile);
        console.log(profile)
        setValid(false);
    }

    const change = (evt) => {
        setProfile({...profile, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
        setValid(evt.target.closest("form").checkValidity());
    }


    return (
        <>
            <Header showLikeMovies={showLikeMovies}/>

            <div className='profile'>
                <h1 className='profile__hi'>Привет, {profile.name}!</h1>
                <form
                    action="#"
                    onSubmit={handleSubmit}
                    noValidate
                >

                    <div className='profile__info'>
                        <p className='profile__info-text'>Имя</p>
                        <input
                            className='profile__info-text'
                            type='text'
                            name='name'
                            defaultValue={profile.name}
                            onChange={change}
                            minLength="4"
                            maxLength="15"
                        />
                    </div>
                    <div className='profile__info'>
                        <p className='profile__info-text'>E-main</p>
                        <input
                            className='profile__info-text'
                            type='email'
                            name='email'
                            defaultValue={profile.email}
                            onChange={change}
                            required minLength="5"
                            maxLength="40" />                       
                    </div>
                    <button className={`${
                    valid ? 'profile__redact' :'profile__redact profile__redact_disabled'}`}
                    type="submit" 
                    disabled={`${valid ? "" : "disabled"}`}
                    >Редактировать</button>
                </form>
                <button className='profile__exit'
                    onClick={() => exit()}
                >
                    Выйти из аккаунта</button>
            </div>
        </>
    )
}

export default Profile;