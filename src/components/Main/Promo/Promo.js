import React from 'react';
import shar from '../../../images/shar.svg'

function Promo() {
    return (
        <div className="promo">
            <div className="promo__info">
                <h1 className="promo__info_name">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__info_about">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href="#more"> <button className="promo__info_buttom">Узнать больше</button></a>
            </div>

            <img src={shar} className="promo__img" alt='Глобус'></img>
        </div>
    );
}

export default Promo;
