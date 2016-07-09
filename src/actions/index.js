export function selectBook(book){
  // selectBook an action creator and needs to return
  // an action.  an object with a type property
  return {
    type:'BOOK_SELECTED',
    payload:book
  } 
}
