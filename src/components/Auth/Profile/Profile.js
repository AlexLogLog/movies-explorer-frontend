import React from 'react';
import Header from '../../General/Header/Header';
import { useHistory } from 'react-router-dom'

function Profile() {
    const history = useHistory();

    return (
        <>
            <Header />

            <div className='profile'>
                <h1 className='profile__hi'>Привет, Виталий!</h1>
                <div className='profile__info'>
                    <p className='profile__info-text'>Имя</p>
                    <p className='profile__info-text'>Виталий</p>
                </div>
                <div className='profile__info'>
                    <p className='profile__info-text'>E-main</p>
                    <p className='profile__info-text'>pochta@yandex.ru</p>
                </div>
                <button className='profile__redact'>Редактировать</button>
                <button className='profile__exit'
                    onClick={() => history.push('/')}>
                    Выйти из аккаунта</button>
            </div>
        </>
    )
}

export default Profile;