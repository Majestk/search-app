import React, {Component} from 'react';
import {
  Grid,
  ListGroup,
} from 'react-bootstrap';
import ResultItem from './ResultItem';

class Results extends Component {

  state = {

  }


render() {
  return (
    <Grid>
     <h2>`{this.props.path} List` </h2>
        <ListGroup>
          {this.props.mapItems(this.props.datapack)}
        </ListGroup>
    </Grid>
    );
  }

}




export default Results;
