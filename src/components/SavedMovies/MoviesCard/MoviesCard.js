import React, { useContext } from 'react';
import imageno from '../../../images/not.png'
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';


function MoviesCard(props) {
    const {
        movie,
        deleteLike,
        
    } = props;
    const currentUser = useContext(CurrentUserContext);

    function time(mins) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
    }

    function handleDeleteMovie(evt) {
        evt.stopPropagation();
        deleteLike(movie);
    }



    return (
        <>
            {
                (movie.owner === currentUser._id) ? (
                    <div className="card">
                        {movie.image ? (<img className="card__img"
                            src={`https://api.nomoreparties.co${movie.image}`}
                            alt={movie.nameRU}></img>
                        ) : (<img className="card__img"
                            src={imageno}
                            alt={movie.nameRU}></img>)
                        }            <div className="card__info">
                            <p className="card__info-name">{movie.nameRU}</p>
                            <button className="card__del-button" onClick={handleDeleteMovie}></button>
                        </div>
                        <p className="card__info-time">{time(movie.duration)}</p>
                    </div>
                ) : (<></>)
            }

        </>
    )

}

export default MoviesCard;