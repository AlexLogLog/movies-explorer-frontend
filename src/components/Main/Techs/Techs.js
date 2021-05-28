import React from 'react';

function Techs() {
    return(
        <div className="techs">
            <h3 className="about__name">Технологии</h3>
            <div className="techs__info">
                <h2 className="techs__heading">7 технологий</h2>
                <p className="techs__about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__sum">
                    <p className="techs__name">HTML</p>
                    <p className="techs__name">CSS</p>
                    <p className="techs__name">JS</p>
                    <p className="techs__name">React</p>
                    <p className="techs__name">Git</p>
                    <p className="techs__name">Express.js</p>
                    <p className="techs__name">mongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default Techs;