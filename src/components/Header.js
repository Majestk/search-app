import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <button className="btn btn-outline-light"><NavLink exact to="/">Search</NavLink></button>
          <button className="btn btn-outline-light"><NavLink to="/results">Results</NavLink></button>
        </ul>
      </nav>

);

export default Header;
