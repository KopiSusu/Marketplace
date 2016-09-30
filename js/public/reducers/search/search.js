// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const searchConfig = {
  featured: {
    'id': 1,
    'title': 'Featured',
    'filter': 'market',
    'icon': 'Market'
  },
  chefs: {
    'id': 2,
    'title': 'Chefs',
    'filter': 'chefs',
    'icon': 'Person'
  },
  meals: {
    'id': 3,
    'title': 'Meals',
    'filter': 'meals',
    'icon': 'Food'
  }
}

const market = [
  {
    title: "Homemade",
    imageURL: "http://homemade-images.s3.amazonaws.com/homemadeLogo.svg",
    tags: "Meals Healty Community Fresh"
  },
  {
    title: "Northern Provisions",
    imageURL: "http://static1.squarespace.com/static/57aaa5399f7456bea43f815d/t/57aaa8613e00be3f30785489/1470802058570/?format=1000w",
    tags: "Baked Canned Non-perishable"
  },
  {
    title: "Bedstuy Eats",
    imageURL: "http://homemade-images.s3.amazonaws.com/bedstuyEats.svg",
    tags: "Local Foodworks Homemade Fresh"
  }
]

export default (state = {
  isFetching: false,
  config: [],
  active: false,
  filter: null,
  query: ''
}, action) => {

  switch (action.type) {
    case 'SET_QUERY':
      return Object.assign({}, state, {
        isFetching: false,
        query: action.payload
      });
    case 'TOGGLE_SEARCH':
      return Object.assign({}, state, {
        isFetching: false,
        active: action.payload
      });
    case 'TOGGLE_FILTER':
      return Object.assign({}, state, {
        isFetching: false,
        filter: action.payload
      });
    case '_FETCH_SECTION':
      let newSection = Object.assign({}, state, newSection);
      newSection[action.nestedKey.toLowerCase()] = action.payload
      newSection['config'].push(searchConfig[action.nestedKey.toLowerCase()])

      if(!newSection['filter'])
        newSection['filter'] = action.nestedKey.toLowerCase()

      return newSection
    default:
      return state
  }
  
}; 









