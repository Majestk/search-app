import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class ResultItem extends Component {

state = {
  index: this.props.index
}

onClick = e => {
  let saved = [this.props.datapack];
  if (this.props.removeSaved == 'false') {
    this.props.saveSearch(saved);
  } else {
    this.props.removeSaved(this.state.index);
  }
}


render() {
  if (this.props.route == 'Results') {
    return (
      <div className="d-flex-xl flex-row">
        <ListGroupItem >{this.props.datapack.authorweb}
          <ul>
            <li>{this.props.datapack.titleAuth}</li>
            <li>{this.props.datapack.onsaledate}</li>
          </ul>
        <button className=" btn btn-outline-dark" onClick={this.onClick} > Save
        </button>
      </ListGroupItem>
    </div>
   );
 } else {
   return (
     <div className="d-flex-xl flex-row">
       <ListGroupItem >{this.props.datapack.authorweb}
         <ul>
           <li>{this.props.datapack.titleAuth}</li>
           <li>{this.props.datapack.onsaledate}</li>
         </ul>
       <button className=" btn btn-outline-dark" onClick={this.onClick} > Remove
       </button>
     </ListGroupItem>
   </div>
  );

 }
}
}
export default ResultItem;
