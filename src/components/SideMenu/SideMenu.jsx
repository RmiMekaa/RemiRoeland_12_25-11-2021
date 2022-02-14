import React from 'react';
import { Link } from 'react-router-dom';

/**
 * React component for the side menu
 * @component
 */
export default function SideMenu() {
  return (
    <div className="sideMenu">
      <nav>
        <Link to="/coming-soon" className="sideMenu__link"></Link>
        <Link to="/coming-soon" className="sideMenu__link"></Link>
        <Link to="/coming-soon" className="sideMenu__link"></Link>
        <Link to="/coming-soon" className="sideMenu__link"></Link>
      </nav>
      <span className='sideMenu__copyright'>Copyright, SportSee 2020</span>
    </div>
  );
}