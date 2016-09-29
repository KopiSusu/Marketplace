// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const sections = [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "A curated marketplace of the absolute best small batch foods",
    "style": {
      "fontSize": "22px",
      "lineHeight": "1.5"
    },
    "contentStyle": {
      "color": "#fff",
      "backgroundColor": "#FFC13C",
      "paddingLeft": "3px",
      "paddingRight": "3px"
    }
  },
  {
    "nestedKey" : "Navigation",
    "type" : "contentOnly navigation sections"
  },
  {
    "nestedKey" : "Meals",
    "type" : "cardList",
    "title" : "MENU",
    "requestType": "User Meal",
    "queries": [
      "v7G5jxYzOM",
      "8Sp8Rky0qN",
      "f56N56Oyht",
      "WLRGQJ8wSY",
      "4MIWhy53xN",
      "8ZHiQfrQPX",
      "WOXHTevgju",
      "USKnp2Sd02",
      "B2vr7TB3Ju",
      "eAX7GDaOZF",
      "Gto3aQQk09"
    ]
  },
  {
    "nestedKey" : "Chefs",
    "type" : "profileList ImageOnly",
    "title" : "Featured Chefs",
    "requestType": "User",
    "callbackTypes": "Review",
    "queries": [
      "v7G5jxYzOM",
      "8Sp8Rky0qN",
      "f56N56Oyht",
      "WLRGQJ8wSY",
      "4MIWhy53xN",
      "8ZHiQfrQPX",
      "WOXHTevgju",
      "USKnp2Sd02",
      "B2vr7TB3Ju",
      "eAX7GDaOZF",
      "Gto3aQQk09"
    ]
  },
  {
    "nestedKey" : "Map",
    "type" : "contentOnly Map",
    "useData": "Chefs"
  }
]

export default (state = {
  isFetching: false,
  selectedSection: null,
  sectionIndex: [],
  listIndex: []
}, action) => {

  switch (action.type) {
    case 'SELECT_SECTION':
      return Object.assign({}, state, {
        isFetching: false,
        selectedSection: action.payload
      });
    case '_FETCH_SECTIONS':
      let newSections = Object.assign({}, state);

      _.forEach(sections, (section) => {
        newSections[section.nestedKey] = section;

        if(section.type.indexOf('contentOnly') < 0) {
          newSections[`content-${section.nestedKey}`] = []
          newSections['listIndex'].push(section.nestedKey)
          newSections['selectedSection'] = section.nestedKey
        }

        newSections.sectionIndex.push(section.nestedKey);
      })

      return newSections;
    case '_FETCH_SECTION':
      let newSection = Object.assign({}, state);
      newSection[`content-${action.nestedKey}`] = action.payload
      return newSection
    default:
      return state
  }
}; 


// We could merge the haywheel metaphor with our multiple markets. E.g instead of each card being a producer, each card could be separate marketplace, and we could list out all our chefs in each marketplace similar to how they do it (since they could essentially be the same thing). 


