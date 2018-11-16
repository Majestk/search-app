import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class ResultItem extends Component {

state = {
  index: this.props.index
}

onClick = e => {
  let saved = [this.props.datapack];
  this.props.saveSearch(this.state.index, saved);
}



render() {
  return (
    <div className="d-flex-xl flex-row">
      <ListGroupItem >{this.props.datapack.authorweb}
        <ul>
          <li>{this.props.datapack.titleAuth}</li>
          <li></li>
        </ul>
      <button className="float-right btn btn-outline-dark" onClick={this.onClick} >Save
      </button>
    </ListGroupItem>
  </div>
 );
}
}
export default ResultItem;
