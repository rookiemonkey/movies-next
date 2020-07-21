import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SearchResults from './components/searchResults';
import './styles/app.css'

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
