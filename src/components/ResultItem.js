import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const ResultItem = props => (
  <ListGroupItem className="justify-content-between">{props.data}<button className="btn btn-outline-light d-flex"><NavLink to="/more">More</NavLink></button></ListGroupItem>
);

export default ResultItem;
