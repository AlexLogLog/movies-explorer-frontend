import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import film1 from '../../../images/1.png'
import film2 from '../../../images/2.png'
import film3 from '../../../images/3.png'
import film4 from '../../../images/4.png'
import film5 from '../../../images/5.png'
import film6 from '../../../images/6.png'
import film7 from '../../../images/7.png'
import film8 from '../../../images/8.png'
import film9 from '../../../images/9.png'
import film10 from '../../../images/10.png'
import film11 from '../../../images/11.png'
import film12 from '../../../images/12.png'

function MoviesCardList() {
    return (
        <div className="movies-list">
            <MoviesCard
                img={film1}
                name="33 слова о дизайне"
                time="1ч 47м"
                saved="yes"
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
            <MoviesCard
                img={film4}
                name="Баския: Взрыв реальности"
                time="1ч 21м"
            >

            </MoviesCard>
            <MoviesCard
                img={film5}
                name="Бег это свобода"
                time="1ч 44м"
            >

            </MoviesCard>
            <MoviesCard
                img={film6}
                name="Книготорговцы"
                time="1ч 37м"
                saved="yes"
            >

            </MoviesCard>
            <MoviesCard
                img={film7}
                name="Когда я думаю о Германии ночью"
                time="1ч 56м"
            >

            </MoviesCard>
            <MoviesCard
                img={film8}
                name="Gimme Danger: История Игги и The Stooge..."
                time="1ч 59м"
            >

            </MoviesCard>
            <MoviesCard
                img={film9}
                name="Дженис: Маленькая девочка грустит"
                time="1ч 42м"
                saved="yes"
            >

            </MoviesCard>
            <MoviesCard
                img={film10}
                name="Соберись перед прыжком"
                time="1ч 10м"
                saved="yes"
            >

            </MoviesCard>
            <MoviesCard
                img={film11}
                name="Пи Джей Харви: A dog called money"
                time="1ч 4м"
            >

            </MoviesCard>
            <MoviesCard
                img={film12}
                name="По волнам: Искусство звука в кино"
                time="1ч 7м"
            >

            </MoviesCard>
        </div>
    )
}

export default MoviesCardList;