import React from 'react';
import icon from '../../../images/icon.svg'

function Portfolio() {
    return (
        <div className="portfolio">
            <h4 className="portfolio__heading">Портфолио</h4>
            <a className="portfolio__name" href='https://github.com/' target="_blank"  rel="noreferrer">
                <p className="portfolio__link" >Статичный сайт</p>
                <img src={icon} alt="Иконка"></img>
            </a>
            <a className="portfolio__name" href='https://github.com/' target="_blank"  rel="noreferrer">
                <p className="portfolio__link">Адаптивный сайт</p>
                <img src={icon} alt="Иконка"></img>
            </a>
            <a className="portfolio__name" href='https://github.com/' target="_blank"  rel="noreferrer">
                <p className="portfolio__link">Одностраничное приложение</p>
                <img src={icon} alt="Иконка"></img>
            </a>
        </div>
    )
}

export default Portfolio;