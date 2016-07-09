import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js'
import {bindActionCreators} from 'redux'

class BookList extends Component {
    constructor(props){
        super(props);
        this.list = ["A Farewell to Arms", "A Tale of Two Cities"]
        console.log ("hello")

    }

    renderList(){
      return this.props.books.map((book) => {
        return (
          <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
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

//export default BooksList
// if state changes, container will re-render
function mapStateToProps(state){
  //whatever gets returned will show up as props inside of BookList
  return{
     books: state.books
   }
}

//Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps (dispatch){
  // whenever selectBook is called, result should be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
