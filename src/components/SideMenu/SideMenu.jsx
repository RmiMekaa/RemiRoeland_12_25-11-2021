import React from 'react';
import { Link } from 'react-router-dom';

/**
 * React component for side menu
 * @component
 */
function SideMenu() {
  return (
    <div className="sideMenu">
      <nav>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
        <Link to="/" className="sideMenu__link"></Link>
        {/* For development only ↓ */}
        <Link to="/user/12" className="user_shortcut">12</Link>
        <Link to="/user/18" className="user_shortcut">18</Link>
        {/* For development only ↑ */}
      </nav>
      <span className='sideMenu__copyright'>Copyright, SportSee 2020</span>
    </div>
  );
}

export default SideMenu;