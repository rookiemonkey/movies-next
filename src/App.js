import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import SearchResults from './components/searchResults';
import './styles/app.css'

// http://www.omdbapi.com/?apikey=f4de5974&

const App = props => {
  const { classes } = props;
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movie/:search' component={SearchResults} />
    </Switch>
  );
}

export default App;
