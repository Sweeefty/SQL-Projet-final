// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: 'gray' }}>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À Propos</Link></li>
          <li><Link to="/nosproduits">Nos Produits</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
