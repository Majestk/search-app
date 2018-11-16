import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
      <nav className="navbar navbar-dark bg-dark">
        <ul>
          <NavLink exact to="/"><button className="btn btn-outline-light">Search</button></NavLink>
          <NavLink exact to="/results"><button className="btn btn-outline-light">Results<span className="badge bage-info">{props.data1}</span></button></NavLink>
          <NavLink exact to="/saved"><button className="btn btn-outline-light">Saved<span className="badge bage-info">{props.data2}</span></button></NavLink>
        </ul>
      </nav>

);

export default Header;
