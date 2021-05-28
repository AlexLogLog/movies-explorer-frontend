//import logo from './logo.svg';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Auth/Profile/Profile';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="root">
      <Switch>
        <Route exact path='/signin' component={Login} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/' component={Main} />
        <Route exact path='/movies' component={Movies}/>
        <Route exact path='/saved-movies' component={SavedMovies} />
        <Route exact path='/profile' component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
