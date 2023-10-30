// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Accueil from './Accueil';
import APropos from './APropos';
import NosProduits from './NosProduits.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Accueil} />
          <Route path="/apropos" component={APropos} />
          <Route path="/nosproduits" component={NosProduits} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
