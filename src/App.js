import React, { Component } from 'react';
import { Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Header from './components/Header'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
// using fetch causes CORS errors when asking for JSON, yet axios bypasses this issue
import axios from 'axios';






class App extends Component {

  constructor(){
    super();
    this.state = {
      results:[{authorweb: 'There is nothing to show yet, try searching for a book or author!'}],
      author:[]
    };
    this.performSearch = this.performSearch.bind(this);
  }
//fetch data from api
  performSearch(query, type) {
    axios.get(`https://reststop.randomhouse.com/resources/works/?start=0&max=40&expandLevel=1&search=${query}`)
      .then(response => {
        this.setState({
          results: response.data.work
        });
      })
      .then(results =>  { if (this.state.results == undefined)
        {this.setState(
                {results : [{authorweb: 'There is nothing to show yet, try searching for a book or author!'}]}
              )}
            })
      .catch(error => {
        console.log('Error fetching data', error);
      });


  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
      <Route exact path="/" render= { () =>

          <div>
            <Header />
            <Jumbotron>
              <Grid>
                <h1>Search App</h1>
                <p>This is a simple search app for Books</p>

                <SearchForm onSearch={this.performSearch} />
              </Grid>
            </Jumbotron>
          </div>
      } />

            <Route path="/results" render={ () => <div><Header /> <Grid><Results data={this.state.results}/></Grid></div>}/>
            <Route path="/more" render={ () => <h1>more coming</h1>} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
