class MainApi {
    constructor(options) {
        this._url = options.url;
    }
    _error(res) {
        if (res.ok) {
            return res.json();
        } else return Promise.reject(`Ошибка: ${res.status}`);

    }
    signup(info) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then((res) => this._error(res))
    }
    signin(info) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then((res) => this._error(res))
    }

    getTokenEmail(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        }).then((res) => this._error(res))
    }


    getMovies(token) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(this._error)
    }

    newMovies(info, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                info
            )
        }).then(this._error)
    }

    delMovie(info, token) {
        return fetch(`${this._url}/movies/${info._id}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(this._error)
    }
    getProfile(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(this._error)
    }

    updateProfile(info, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                info
            )
        }).then(this._error)
    }


}


export const mainApi = new MainApi({
    url: 'https://api.alexlog.diplom.nomoredomains.monster'
});


