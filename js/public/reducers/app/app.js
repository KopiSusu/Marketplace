import * as  Actions from './../../actions'

const app = {
  "title": "Homemade Producer List",
  "image": "http://homemade-images.s3.amazonaws.com/bedstuyEats.svg",
  "navStyle": {
    "background": "url('http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/food.png')",
    "height": "120px"
  }
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
