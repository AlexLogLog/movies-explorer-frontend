import React from 'react';


function MoviesCard(props) {
    const {
        img,
        name,
        time
    } = props;
    return (
        <div className="card">
            <img className="card__img" src={img} alt="Фото"></img>
            <div className="card__info">
                <p className="card__info-name">{name}</p>
                <button className="card__del-button"></button>
            </div>
            <p className="card__info-time">{time}</p>
        </div>
    )
}

export default MoviesCard;