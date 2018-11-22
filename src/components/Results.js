import React, {Component} from 'react';
import {
  Grid,
  ListGroup,
} from 'react-bootstrap';

class Results extends Component {

  state = {

  }


render() {
  return (
    <Grid>
     <h2>{this.props.route} List </h2>
        <ListGroup>
          {this.props.mapItems(this.props.datapack, this.props.route)}
        </ListGroup>
    </Grid>
    );
  }

}




export default Results;
