import React, { useContext } from 'react';
import imageno from '../../../images/not.png';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';


function MoviesCard(props) {
    const {
        movie,
        like,
        likeMovies,
        deleteLike,
        
    } = props;
    const currentUser = useContext(CurrentUserContext);
    function time(mins) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
    }

    const [isCardLikeClicked, setIsCardLikeClicked] = React.useState(false);
    const classLike = `${isCardLikeClicked ? "card__info-button card__info-butto_saved" : "card__info-button"
        }`;
    const setLikes = React.useCallback(() => {
        
        const likeUserSave = likeMovies.find((movieRes) => movieRes.movieId === movie.id);
        // const likeUser = likeAll.find((movieRes) => movieRes.owner === currentUser._id);
        if (likeUserSave) {
            setIsCardLikeClicked(true);
        } else {
            setIsCardLikeClicked(false);
        }
    }, [movie.id, likeMovies]);

    React.useEffect(() => {
        setLikes();
    }, [setLikes]);

    function handleLikeClick(evt) {
        evt.stopPropagation();
        if (!isCardLikeClicked) {
            like({
                country: movie.country || "default",
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image.url,
                trailer: movie.trailerLink,
                thumbnail: movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN || "default",
                owner: currentUser._id,
            });
            setIsCardLikeClicked(true);
        } else {
            const savedCard = likeMovies.find((movieRes) => movieRes.movieId === movie.id);

            deleteLike(savedCard);
            setIsCardLikeClicked(false);
        }
    }
    return (
        <div className="card">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                {movie.image ? (<img className="card__img"
                    src={`https://api.nomoreparties.co${movie.image.url}`}
                    alt={movie.nameRU}></img>
                ) : (<img className="card__img"
                    src={imageno}
                    alt={movie.nameRU}></img>)
                }
            </a>
            <div className="card__info">
                <p className="card__info-name">{movie.nameRU}</p>
                {/* <button className={`card__info-button ${saved ? 'card__info-butto_saved' : ''} `}></button> */}
                <button className={classLike} onClick={handleLikeClick}></button>

            </div>
            <p className="card__info-time">{time(movie.duration)}</p>
        </div>
    )
}

export default MoviesCard;