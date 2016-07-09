//state is no the appliction state, but rather the state that this
export default function (state = null, action){

  switch (action.type){
    case 'BOOK_SELECTED':
      return action.payload
      break;
  }
  return state
}
