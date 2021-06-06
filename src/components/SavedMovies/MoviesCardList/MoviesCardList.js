import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useWindowSize } from '../../../utils/sizeWin'
import ButtonElse from '../../Movies/ButtonElse/ButtonElse'



function MoviesCardList(props) {
    const {
        moviesFind,
        deleteLike,
        likeMovies,
        searche
    } = props;

    const [countMovies, setCountCards] = React.useState(0);
    const [moreMovies, setMoreMovies] = React.useState(0);

    const windowWidth = useWindowSize();

    function handleMoreBtnClick() {
        setCountCards(countMovies + moreMovies);
    }

    React.useEffect(() => {
        if (windowWidth >= 768) {
            setCountCards(12);
            setMoreMovies(3);
        }
        if (windowWidth < 768 && windowWidth >= 480) {
            setCountCards(8);
            setMoreMovies(2);
        }
        if (windowWidth < 480) {
            setCountCards(5);
            setMoreMovies(1);
        }
    }, [windowWidth]);
    
    if ((!searche  ) ) {
        return (
            <>
                <div className="movies-like">
                    {

                        likeMovies.slice(0, countMovies).map((movie) =>
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                deleteLike={deleteLike}
                            >

                            </MoviesCard>
                        )
                    }

                </div>
                <ButtonElse
                    more={handleMoreBtnClick}
                    movies={likeMovies}
                    countMovies={countMovies}
                />

            </>
        )
    } else {
        return (
            <>
                <div className="movies-like">
                    {

                        moviesFind.slice(0, countMovies).map((movie) =>
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                deleteLike={deleteLike}
                            >

                            </MoviesCard>
                        )
                    }

                </div>
                <ButtonElse
                    more={handleMoreBtnClick}
                    movies={moviesFind}
                    countMovies={countMovies}
                />

            </>
        )
    } 

}

export default MoviesCardList;