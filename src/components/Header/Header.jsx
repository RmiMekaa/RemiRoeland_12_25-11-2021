import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

/**
 * React Component for the header
 * @component
 */
export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="header__link"><img className='header__logo' src={logo} alt='logo' /></Link>
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="/coming-soon" className="header__link">Profil</Link>
        <Link to="/coming-soon" className="header__link">Réglages</Link>
        <Link to="/coming-soon" className="header__link">Communauté</Link>
      </nav>
    </header>
  );
}