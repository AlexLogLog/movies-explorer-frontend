class MoviesApi {
    constructor(options) {
        this._url = options.url;
    }
    _error(res) {
        if (res.ok) {
            return res.json();
        } else return Promise.reject(`Ошибка: ${res.status}`);

    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        }).then(this._error)
    }
}

export const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies'
})