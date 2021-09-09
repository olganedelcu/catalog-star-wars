import './App.css';
import React, { useState, useEffect } from 'react';
import CatalogPage from './components/CatalogPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import CharacterPage from './components/CharacterPage';
import LoadMore from './components/LoadMore';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let response = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await response.json();
      setPeople(data.results);
    }
    fetchPeople();
  })
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/'>
            <CatalogPage data={people} />
            <LoadMore />
          </Route>
          <Route exact path='/character/:id'>
            <CharacterPage/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
