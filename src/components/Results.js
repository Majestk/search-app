import React from 'react';
import {
  Grid,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const Results = () => (
  <Grid>
   <h2>Results List </h2>
      <ListGroup>
        <ListGroupItem href="#" >Link 1</ListGroupItem>
        <ListGroupItem href="#">Link 2</ListGroupItem>
        <ListGroupItem href="#" >Link 3</ListGroupItem>
      </ListGroup>
  </Grid>
);

export default Results;
