import React from 'react';

function SearchForm(props) {
    const {
        handleCheckbox,
        checkbox,
        searchMoviesButton,
        preloader
    } = props;

    const [inputText, setInputText] = React.useState([]);

    const [errors, setErrors] = React.useState({});

    const [valid, setValid] = React.useState(false);

    function handleChange(evt) {
        setInputText(evt.target.value);
        setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
        setValid(evt.target.closest("form").checkValidity());
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        searchMoviesButton(inputText);
        setValid(false);
        preloader()
    }

    return (
        <div className="search">
            <form className="search__form" name="find" noValidate onSubmit={handleSubmit}>
                <input className="search__form-input" type="text" name="film" placeholder="Фильм" required="2" maxLength="40"
                    onChange={handleChange}
                ></input>
                <button 
                className={`${valid ? "search__form-button" : "search__form-button search__form-button_disabled" }`}
                type="submit" 
                disabled={`${valid ? "" : "disabled"}`}
                ></button>
            </form>
            <label className="search__switch">
                <input className="search__checkbox" type="checkbox"
                    onChange={handleCheckbox}
                    checked={checkbox}
                />
                <span className="search__slider search__slider_round"></span>
                <span className="search__text">Короткометражки</span>
            </label>
        </div>
    )
}

export default SearchForm;