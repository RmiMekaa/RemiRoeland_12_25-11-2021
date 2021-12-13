/**
 * @typedef {import('react').ReactElement}  ReactElement
 */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

/**
 * React Component for Header
 * @returns { ReactElement }
 */
function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="header__link"><img className='header__logo' src={logo} alt='logo' /></Link>
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="/" className="header__link">Profil</Link>
        <Link to="/" className="header__link">Réglages</Link>
        <Link to="/" className="header__link">Communauté</Link>
      </nav>
    </header>
  );
}

export default Header;