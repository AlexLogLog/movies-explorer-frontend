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
          localStorage.setItem("moviesList", JSON.stringify(moviesList));
          setAllMovies(JSON.parse(localStorage.getItem("moviesList")));
          localStorage.setItem("moviesLikeList", JSON.stringify(moviesLikeList));
          setLikeMovies(JSON.parse(localStorage.getItem("moviesLikeList")));
          setCurrentUser(userInfo);

          setFindAllMovies(JSON.parse(localStorage.getItem("allFindMovies")))
          setFindLikeMovies(JSON.parse(localStorage.getItem("likeFindMovies")))
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
      const allFindShortMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()) && (movie.duration <= 40))
      localStorage.setItem("allFindMovies", JSON.stringify(allFindShortMovies));
      setFindAllMovies(allFindShortMovies);
    } else {
      const allFindMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()))
      localStorage.setItem("allFindMovies", JSON.stringify(allFindMovies));
      setFindAllMovies(allFindMovies);
    }
  }

  //поиск по сохраненым фильмам
  function searchLikeMovies(text) {
    if (shortCheckbox) {
      setSerche(true);
      const likeMoviesNotUser = likeMovies.filter((movieRes) => movieRes.owner === currentUser._id);
      const allFindShortMovies = likeMoviesNotUser.filter((movie) => (movie.nameRU.toLowerCase().includes(text.toLowerCase())) && (movie.duration <= 40))
      localStorage.setItem("likeFindMovies", JSON.stringify(allFindShortMovies));
      setFindLikeMovies(allFindShortMovies);
    } else {
      setSerche(true);
      const likeMoviesNotUser = likeMovies.filter((movieRes) => movieRes.owner === currentUser._id);
      const allFindMovies = likeMoviesNotUser.filter((movie) => movie.nameRU.toLowerCase().includes(text.toLowerCase()));
      localStorage.setItem("likeFindMovies", JSON.stringify(allFindMovies));
      setFindLikeMovies(allFindMovies);
    }
  }

  //добавление в избраное 
  function addMoviesLike(movie) {
    mainApi
      .newMovies(movie, localStorage.token)
      .then((res) => {
        setLikeMovies([...likeMovies, res]);
        localStorage.setItem("moviesLikeList", JSON.stringify([...likeMovies, res]))

      })
      .catch((err) => {
        alert(`Ошибка ${err.status}! Попробуйте еще раз.`);
      })

  }

  //удаление из избраного
  function deleteLike(movie) {
    mainApi
      .delMovie(movie, localStorage.token)
      .then((res) => {
        const newFindMovies = likeMovies.filter((movieRes) => movieRes._id !== movie._id);
        const newLikeFindMovies = findLikeMovies.filter((movieRes) => (movieRes.owner === currentUser._id)).filter((movieRes) => (movieRes._id !== movie._id));
        localStorage.setItem("moviesLikeList", JSON.stringify(newLikeFindMovies));

        setLikeMovies(newFindMovies);
        localStorage.setItem("likeFindMovies", JSON.stringify(newLikeFindMovies));
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
    history.push('/')
  }

  function showLikeMovies() {
    setSerche(false);
  }
  const likeUser = likeMovies.filter((movieRes) => movieRes.owner === currentUser._id);
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
            likeMovies={likeUser}
            deleteLike={deleteLike}
          />

          <ProtectedRoute
            showLikeMovies={showLikeMovies}
            component={SavedMovies}
            path='/saved-movies'
            loggedIn={loggedIn}
            likeMovies={likeUser}
            handleCheckbox={handleCheckbox}
            checkbox={shortCheckbox}
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
