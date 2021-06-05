//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from './ProtectedRoute';


import Main from '../Main/Main';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Auth/Profile/Profile';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [likeMovies, setLikeMovies] = useState([]);
  const [findAllMovies, setFindAllMovies] = useState([]);
  const [findLikeMovies, setFindLikeMovies] = useState([]);
  const [shortCheckbox, setShortCheckbox] = useState(false);
  const [searche, setSerche] = useState(false);
  const [loadAllMovies, setLoadAllMovies] = useState(false);
  const [notMovies, setNotMoves] = useState(false);

  const history = useHistory();
  function preloader() {
    setLoadAllMovies(true);
    setTimeout(async () => {
      setLoadAllMovies(false);
    }, 100);
  }
  useEffect(() => {
    if (loggedIn) {
      Promise.all(
        [
          mainApi
            .getMovies(localStorage.token),
          moviesApi
            .getMovies(),
          mainApi
            .getProfile(localStorage.token),

        ])
        .then(([moviesLikeList, moviesList, userInfo]) => {
          setAllMovies(moviesList);
          setLikeMovies(moviesLikeList);
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
        });
    }
  }, [loggedIn]);

  //изменеие профиля
  function handleUpdateProfile(newInfo) {
    mainApi
      .updateProfile(newInfo, localStorage.token)
      .then(() => {
        mainApi
          .getProfile(localStorage.token)
          .then((userInfo) => {
            setCurrentUser(userInfo);
            alert('Профиль успешно изменен!')
          })
      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      });
  }

  //вход
  function handleLogin(info) {
    mainApi
      .signin(info)
      .then((token) => {
        if (token) {
          console.log(' ЦСПЕШНО')
          localStorage.setItem('token', token.token);
          setLoggedIn(true);
          checkToken();
        }
      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      })
  };

  //регистрация
  function handleRegister(info) {
    mainApi
      .signup(info)
      .then((res) => {
        if (res) {
          alert('Регистрайция прошла успешно.')
          history.push('/signin')
        }
      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      })
  };

  //проверка токена
  function checkToken() {
    if (localStorage.token) {
      mainApi
        .getTokenEmail(localStorage.token)
        .then((res) => {
          if (res) {
            setLoggedIn(true)
            history.push('/movies')
          } else {
            localStorage.removeItem('token')
            setLoggedIn(false)

          }
        }).catch(() => {
          localStorage.removeItem('token')
        })
    }
  };

  //активный или нет чекбокс
  function handleCheckbox() {
    setShortCheckbox(!shortCheckbox);
  }

  //поиск по фильмам
  function searchAllMovies(text) {
    if (shortCheckbox) {
      setNotMoves(true);
      const allFindShortMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()) && (movie.duration <= 40))
      setFindAllMovies(allFindShortMovies);
    } else {
      setNotMoves(true);
      const allFindMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
      setFindAllMovies(allFindMovies);
    }
  }

  //поиск по сохраненым фильмам
  function searchLikeMovies(text) {
    if (shortCheckbox) {
      setSerche(true);
      const allFindShortMovies = likeMovies.filter((movie) => (movie.nameRU.toLowerCase().includes(text.toLowerCase())) && (movie.duration <= 40))
      setFindLikeMovies(allFindShortMovies);
    } else {
      setSerche(true);
      const allFindMovies = likeMovies.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
      setFindLikeMovies(allFindMovies);
    }
  }

  //добавление в избраное 
  function addMoviesLike(movie) {
    mainApi
      .newMovies(movie, localStorage.token)
      .then((res) => {
        mainApi
          .getMovies(localStorage.token)
          .then((res) => setLikeMovies(res))
      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      })

  }

  //удаление из избраного
  function deleteLike(movie) {
    console.log(movie._id)
    mainApi
      .delMovie(movie, localStorage.token)
      .then((res) => {
        const newFindMovies = likeMovies.filter((movieRes) => movieRes._id !== movie._id);
        const newLikeFindMovies = likeMovies.filter((movieRes) => movieRes._id !== movie._id);
        setLikeMovies(newFindMovies);
        setFindLikeMovies(newLikeFindMovies);
      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      });
  }

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function removeProfile() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setCurrentUser({});
  }

  function showLikeMovies() {
    setSerche(false);
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>

        <Switch>
          <Route path='/' exact>
            <Main loggedIn={loggedIn} showLikeMovies={showLikeMovies} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>

          <ProtectedRoute
            showLikeMovies={showLikeMovies}
            component={Movies}
            path='/movies'
            preloader={preloader}
            loadAllMovies={loadAllMovies}
            loggedIn={loggedIn}
            searchMoviesButton={searchAllMovies}
            handleCheckbox={handleCheckbox}
            checkbox={shortCheckbox}
            moviesFind={findAllMovies}
            like={addMoviesLike}
            likeMovies={likeMovies}
            deleteLike={deleteLike}
            notMovies={notMovies}
          />

          <ProtectedRoute
            showLikeMovies={showLikeMovies}
            component={SavedMovies}
            path='/saved-movies'
            loggedIn={loggedIn}
            likeMovies={likeMovies}
            handleCheckbox={handleCheckbox}
            checkbox={shortCheckbox}
            movies={likeMovies}
            moviesFind={findLikeMovies}
            deleteLike={deleteLike}
            searchMoviesButton={searchLikeMovies}
            searche={searche}
            preloader={preloader}
          />

          <ProtectedRoute
            showLikeMovies={showLikeMovies}
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            exit={removeProfile}
            updateProfile={handleUpdateProfile} />


          <Route component={NotFound} />
        </Switch>
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
