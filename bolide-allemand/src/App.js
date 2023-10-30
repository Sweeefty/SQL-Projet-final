import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';
import APropos from './APropos';
import NosProduits from './NosProduits';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Header from './header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/nosproduits" element={<NosProduits />} />
		<Route path="/inscription" element={<Inscription />} />
		<Route path="/connexion" element={<Connexion />} />
      </Routes>
    </Router>
  );
}

export default App;
