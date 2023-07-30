import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Gord</NavLink></li>
        <li><NavLink to="/beach">Jim</NavLink></li>
        <li><NavLink to="/bird">Leonard</NavLink></li>
        <li><NavLink to="/food">Joni</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
