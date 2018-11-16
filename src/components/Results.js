import React from 'react';
import {
  Grid,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import ResultItem from './ResultItem';

const Results = props => {
  const results = props.data;
  let res = "";
  //if the API returns a single item it will be as an object instead of an array of objects
  //add a fix for this eventual to check if data is an array
  if ( Array.isArray(results)) {
    res = results.map((data, index) => <ResultItem data={data.authorweb} key={index}/>);
  } else {
    res = <ResultItem data={results.authorweb}/>;
  }


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
