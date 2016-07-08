import React, { Component } from 'react';
class BooksList extends Component {
    constructor(props){
        super(props);
        this.list = ["A Farewell to Arms", "A Tale of Two Cities"]
        console.log ("hello")

    }

    renderList(){
      return this.list.map((book) => {
        return (
          <li key={book} className="list-group-item">{book}</li>
        )
      })
    }

    render (){
      return (
          <ul className="list-group col-sm-4" >
            {this.renderList()}
          </ul>

      );
    }
}
export default BooksList
