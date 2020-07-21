import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SearchResults from './components/searchResults';
import './styles/app.css'

// http://www.omdbapi.com/?apikey=f4de5974&

const App = () => {
  return (
    <Switch>

      <Route
        exact path='/'
        render={routerProps => {
          return <Home {...routerProps} />
        }} />

      <Route
        exact path='/movie/:search'
        render={routerProps => {
          return <SearchResults {...routerProps} />
        }} />

    </Switch>
  );
}

export default App;
