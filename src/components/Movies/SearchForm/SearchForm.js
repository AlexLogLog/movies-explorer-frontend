import React from 'react';

function SearchForm() {
    return (
        <div className="search">
            <form className="search__form" name="find" noValidate>
                <input className="search__form-input"type="text" name="film" defaultValue="Фильм" required="2" maxLength="40"></input>
                <button className="search__form-button" type="submit" ></button>
            </form>
            <label className="search__switch">
                <input className="search__checkbox" type="checkbox" />
                <span className="search__slider search__slider_round"></span>
                <span className="search__text">Короткометражки</span>
            </label>
        </div>
    )
}

export default SearchForm;