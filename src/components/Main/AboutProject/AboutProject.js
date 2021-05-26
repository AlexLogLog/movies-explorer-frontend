import React from 'react';

function AboutProject() {
    return (
        <div className="about" id="more">
            <h2 className="about__name">О проекте</h2>
            <div className="about__main">
                <div className="about__blocks">
                    <p className="about__block">Дипломный проект включал 5 этапов</p>
                    <p className="about__block-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__blocks">
                    <p className="about__block">На выполнение диплома ушло 5 недель</p>
                    <p className="about__block-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <table className="about__table">
                <tbody>
                    <tr className="about__times">
                        <th className="about__time about__time_text1">1 неделя</th>
                        <th className="about__time about__time_text2">4 недели</th>
                    </tr>
                    <tr className="about__whats">
                        <td className="about__what">Back-end</td>
                        <td className="about__what">Front-end</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default AboutProject;
