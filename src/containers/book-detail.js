import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book){
      return <div> Select a book</div>
    }
    return(
      <div>
        <h3>Details For: </h3>
        <div>{this.props.book.title}
        </div>
        <div>{this.props.book.length}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  //whatever gets returned will show up as props inside of BookList
  return{
     book: state.activeBook
   }
}

// function mapDispatchToProps (dispatch){
//   return {}
// }

export default connect(mapStateToProps)(BookDetail)
