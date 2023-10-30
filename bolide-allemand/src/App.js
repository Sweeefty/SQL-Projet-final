import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';
import APropos from './APropos';
import NosProduits from './NosProduits';
import Header from './header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/nosproduits" element={<NosProduits />} />
      </Routes>
    </Router>
  );
}

export default App;
