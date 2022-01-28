import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <main className='homePage'>
      <span>Selectionnez un utilisateur</span>
      <nav>
        <NavLink to="/user/12" className="user_shortcut">Karl</NavLink>
        <NavLink to="/user/18" className="user_shortcut">Cecilia</NavLink>
      </nav>
    </main>
  )
}