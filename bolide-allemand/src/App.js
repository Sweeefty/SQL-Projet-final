// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Accueil from './Accueil';
import APropos from './APropos';
import NosProduits from './NosProduits';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/apropos" component={APropos} />
          <Route path="/nosproduits" component={NosProduits} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
