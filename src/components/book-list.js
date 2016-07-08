import React, { Component } from 'react';
class BooksList extends Component {
    constructor(props){
        super(props);
        this.list = ["A Farewell to Arms", "A Tale of Two Cities"]

    }
    
    render (){
      return (
          <ul className="books-list" >
            {this.list}
          </ul>

      );
    }
}
export default BooksList
