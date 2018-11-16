import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/Header';
import ResultItem from './components/ResultItem'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
// using fetch causes CORS errors when asking for JSON, axios.get() bypasses this issue
import axios from 'axios';





class App extends Component {

  constructor(){
    super();
    this.state = {
      results:[{authorweb: 'There is nothing to show yet, try searching for a book or author!'}],
      savedSearches:[],
      query: ""
    };
    this.performSearch = this.performSearch.bind(this);
  }
//fetch data from api using search value in form
  performSearch(query, type) {
      axios.get(`https://reststop.randomhouse.com/resources/works/?start=0&max=40&expandLevel=1&search=${query}`)
        .then(response => { if (Array.isArray(response.data.work)) {
            this.setState({
              results: response.data.work,
              query: query
            });
          } else {this.setState({results: [response.data.work]})}
        })
        .then(results =>  { if (this.state.results === undefined)
          {this.setState(
                  {results : [{authorweb: 'There is nothing to show yet, try searching for a book or author!'}]}
            )}
        })
        .catch(error => {
          console.log('Error fetching data', error);
        });
  }
  // create a function to combine api data bits
  mapResults(array) {
    return (
      array.map((data, index) => <ResultItem datapack={data} key={index} index={index} saveSearch={this.saveSearch} />)
    );
  }
  saveSearch = (index, saved) => {

      this.setState({
        savedSearches: [saved[index]]
      });
    }


  render() {
    return (
      <BrowserRouter>
        <Switch>
      <Route exact path="/" render= { () =>

          <div>
            <Header data1={this.state.results.length} data2={this.state.savedSearches.length} />
            <Jumbotron>
              <Grid>
                <h1>Search App</h1>
                <p>This is a simple search app for Books</p>

                <SearchForm onSearch={this.performSearch} />
              </Grid>
            </Jumbotron>
          </div>
      } />

            <Route path="/results" render={ () =>
              <div>
                <Header
                    data1={this.state.results.length}
                    data2={this.state.savedSearches.length} />
                      <Grid>
                        <Results
                          path='Results'
                          datapack={this.state.results}
                          mapItems={this.mapResults}
                          saveSearch={this.saveSearch} />
                      </Grid>
              </div>}/>

            <Route path="/saved" render={ () =>
                  <div>
                    <Header
                    data1={this.state.results.length}
                    data2={this.state.savedSearches.length}/>
                      <Grid>
                        <Results
                          path='Saved'
                          datapack={this.state.savedSearches}
                          mapItems={this.mapResults}
                          removeSaved={this.removeSaved}
                        />
                      </Grid>
                  </div>} />

          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
