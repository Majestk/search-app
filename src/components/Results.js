import React from 'react';
import {
  Grid,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import ResultItem from './ResultItem';

const Results = props => {
  const results = props.data;
  let res = results.map(data => <ResultItem data={data.authorweb}/>);

return (
  <Grid>
   <h2>Results List </h2>
      <ListGroup>
        {res}
      </ListGroup>
  </Grid>
);
};


export default Results;
