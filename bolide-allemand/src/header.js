import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-300 p-4 flex justify-between">
      <ul className="list-none flex gap-4">
        <li>
          <Link to="/" className="text-gray-800">Accueil</Link>
        </li>
        <li>
          <Link to="/apropos" className="text-gray-800 text-l">À Propos</Link>
        </li>
        <li>
          <Link to="/nosproduits" className="text-gray-800">Nos Produits</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Link to="/inscription" className="text-gray-800">Inscription</Link>
        <Link to="/connexion" className="text-gray-800">Connexion</Link>
      </div>
    </nav>
  );
}

export default Header;
