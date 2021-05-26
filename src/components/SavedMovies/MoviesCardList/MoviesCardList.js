import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import film1 from '../../../images/1.png'
import film2 from '../../../images/2.png'
import film3 from '../../../images/3.png'

function MoviesCardList() {
    return (
        <div className="movies-like">
            <MoviesCard
                img={film1}
                name="33 слова о дизайне"
                time="1ч 47м"
            >

            </MoviesCard>
            <MoviesCard
                img={film2}
                name="Киноальманах «100 лет дизайна»"
                time="1ч 3м"
            >

            </MoviesCard>
            <MoviesCard
                img={film3}
                name="В погоне за Бенкси"
                time="1ч 42м"
            >
            </MoviesCard>
        </div>
    )
}

export default MoviesCardList;