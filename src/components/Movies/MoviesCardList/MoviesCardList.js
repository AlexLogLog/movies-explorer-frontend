import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonElse from '../ButtonElse/ButtonElse';
import { useWindowSize } from '../../../utils/sizeWin'
import Preloader from '../Preloader/Preloader';


function MoviesCardList(props) {
    const {
        moviesFind,
        like,
        likeMovies,
        deleteLike,
        loadAllMovies
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

    return (
        // notMovies ? 
        moviesFind !== null && <>
            {loadAllMovies && <Preloader />}
            <div className="movies-list">
                {

                     moviesFind.slice(0, countMovies).map((movie) =>
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            like={like}
                            likeMovies={likeMovies}
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

export default MoviesCardList;