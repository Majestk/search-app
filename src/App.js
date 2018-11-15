import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import axios from 'axios';






class App extends Component {

  constructor(){
    super();
    this.state = {
      results:[]
    };
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(query) {
    axios.get(`https://reststop.randomhouse.com/resources/authors/?start=0&max=10&expandLevel=1&lastName=${query}`)
      .then(response => {
        this.setState({
          results: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app for Books</p>

            <SearchForm onSearch={this.performSearch} />
            <Results />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
