import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu () {
  return (
    <div className="sideMenu">
      <nav>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
      </nav>
      <span className='sideMenu__copyright'>Copyright, SportSee 2020</span>
    </div>
  );
}

export default SideMenu;