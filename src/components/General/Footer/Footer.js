import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
                <p className="footer__age">© 2020</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                    <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;