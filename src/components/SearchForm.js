import React, { Component } from 'react';


class SearchForm extends Component {

  state = {
    searchText: '',
    searchType: 'author',
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value});
  }
  onSelectChange = e => {
    this.setState({ searchType: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText, this.state.searchType );
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search"></label>
        <input className="form-control mr-sm-2"
               type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search " />
        <button type="submit" id="submit" className="btn btn-outline-success my-2 my-sm-0"><i className="material-icons icn-search">Find Books</i></button>
      </form>
    );
  }
}

export default SearchForm;
