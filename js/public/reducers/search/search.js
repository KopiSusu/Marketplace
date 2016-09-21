// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const searchConfig = [
  {
    'title': 'Marketplaces',
    'filter': 'market',
    'icon': 'Market'
  },
  {
    'title': 'Chefs',
    'filter': 'chef',
    'icon': 'Person'
  },
  {
    'title': 'Meals',
    'filter': 'meal',
    'icon': 'Food'
  }
]

export default (state = {
  isFetching: false,
  config: null,
  active: false,
  filter: 'market',
  query: null
}, action) => {

  switch (action.type) {
    case '_FETCH_SEARCH':
      return Object.assign({}, state, {
        isFetching: false,
        config: searchConfig
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
    default:
      return state
  }
  
}; 