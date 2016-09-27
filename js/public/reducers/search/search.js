// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const searchConfig = {
  marketplaces: {
    'title': 'Marketplaces',
    'filter': 'market',
    'icon': 'Market'
  },
  chefs: {
    'title': 'Chefs',
    'filter': 'chef',
    'icon': 'Person'
  },
  meals: {
    'title': 'Meals',
    'filter': 'meal',
    'icon': 'Food'
  }
}

const marketplaces = [
  {
    title: "Homemade",
    logo: "http://homemade-images.s3.amazonaws.com/homemadeLogo.svg",
    tags: "Meals Healty Community Fresh"
  },
  {
    title: "Northern Provisions",
    logo: "http://static1.squarespace.com/static/57aaa5399f7456bea43f815d/t/57aaa8613e00be3f30785489/1470802058570/?format=1000w",
    tags: "Baked Canned Non-perishable"
  },
  {
    title: "Bedstuy Eats",
    logo: "http://homemade-images.s3.amazonaws.com/bedstuyEats.svg",
    tags: "Local Foodworks Homemade Fresh"
  }
]

export default (state = {
  isFetching: false,
  config: null,
  active: false,
  filter: 'market',
  marketplaces: marketplaces,
  query: null
}, action) => {

  switch (action.type) {
    case '_FETCH_SEARCH':
      return Object.assign({}, state, {
        isFetching: false,
        config: [searchConfig['marketplaces']]
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
      return newSection
    default:
      return state
  }
  
}; 









