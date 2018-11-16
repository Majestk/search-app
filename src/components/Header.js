import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
      <nav className="navbar navbar-dark bg-secondary">
        <ul>
          <button className="btn btn-outline-light"><NavLink exact to="/">Search</NavLink></button>
          <button className="btn btn-outline-light"><NavLink to="/results">Results</NavLink><span className="badge badge-light">{props.data1}</span></button>
          <button className="btn btn-outline-light"><NavLink to="/saved">Saved</NavLink><span className="badge badge-light">{props.data2}</span></button>
        </ul>
      </nav>

);

export default Header;
