import * as  Actions from './../../actions'

const app = {
  "title": "Homemade",
  "image": "http://homemade-images.s3.amazonaws.com/homemadeLogo.svg",
  "navStyle": {
    "backgroundImage": "linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url(https://homemade-images.s3.amazonaws.com/np_hero.jpg)",
    "backgroundSize": "cover",
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
