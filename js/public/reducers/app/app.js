import * as  Actions from './../../actions'

const app = {
  "title": "Northern Provisions",
  "image": "http://static1.squarespace.com/static/57aaa5399f7456bea43f815d/t/57aaa8613e00be3f30785489/1470802058570/?format=1000w",
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
