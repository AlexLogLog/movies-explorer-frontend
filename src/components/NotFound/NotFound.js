import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
    const history = useHistory();
    return (
        <>
            <h1 className='not__heading'>404</h1>
            <p className='not__text'>Страница не найдена</p>
            <button className='not__button'
                onClick={() => history.push('/')}>Назад</button>
        </>
    )
}

export default NotFound;