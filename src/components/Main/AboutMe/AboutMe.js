import React from 'react';
import avatar from '../../../images/me.svg'

function AboutMe() {
    return (
        <div className="me">
            <h3 className="about__name">Студент</h3>
            <div className="me__block">
                <div className="me__info">
                    <h2 className="me__info-name">Виталий</h2>
                    <p className="me__info-prof">Фронтенд-разработчик, 30 лет</p>
                    <p className="me__info-about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="me__info-link">
                        <a className="me__link" href='https://www.facebook.com/' target="_blank" rel="noreferrer">Facebook</a>
                        <a className="me__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
                <img className="me__img" src={avatar} alt="Аватар" />
            </div>
        </div>
    )
}

export default AboutMe;