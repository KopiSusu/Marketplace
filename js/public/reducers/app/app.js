import * as  Actions from './../../actions'

const app = {
  "title": "Homemade Producer List",
  "image": "https://s3.amazonaws.com/homemade-images/homemadeLogo.svg"
}

export default (state = {
  	isFetching: false,
  	app: null,
    navigation: null
}, action) => {

  switch (action.type) {
    case '_FETCH_APP':
      return Object.assign({}, state, {
        isFetching: false,
        app: app
      });
    default:
      return state
  }
  
}; 
