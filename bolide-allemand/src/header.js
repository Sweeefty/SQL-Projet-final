import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-300 p-4 flex justify-center">
      <ul className="list-none flex gap-4">
        <li>
          <Link to="/" className="text-black-500 hover:text-black-700">Accueil</Link>
        </li>
        <li>
          <Link to="/apropos" className="text-black-500 hover:text-black-700">À Propos</Link>
        </li>
        <li>
          <Link to="/nosproduits" className="text-black-500 hover:text-black-700">Nos Produits</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
