import * as  Actions from './../../actions'

export default (state = {
  	isFetching: false,
    user: null,
  	loggedIn: false
}, action) => {

  switch (action.type) {
    case '_FETCH_USER':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.payload,
        loggedIn: true
      });
    default:
      return state
  }
  
}; 
