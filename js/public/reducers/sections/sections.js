// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const sections = [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "Bed Stuy Eats is a community of <style>amazing cooks in your neighborhood<style>. Order amazing meals and pick them up right around the corner.",
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
    "nestedKey" : "Meals",
    "type" : "cardList",
    "title" : "MENU",
    "requestType": "Meal",
    "queries": [
      "JIi7dV4xid",
      "5WoNMOfQMD",
      "5cwaZZcNDf",
      "SdQbclV6yp",
      "3zIlOK7z0V",
      "zLHTRv1CgH",
      "9TvCgp2y8n",
      "6Hd5t10oZw",
      "xsJ8A0skww",
      "iFcxzXuttw",
      "RmlPoharvS"
    ]
  },
  {
    "nestedKey" : "Chefs",
    "type" : "profileList Map ImageOnly Slideover",
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
  sectionIndex: []
}, action) => {

  switch (action.type) {
    case '_FETCH_SECTIONS':
      let newSections = Object.assign({}, state);

      _.forEach(sections, (section) => {
        newSections[section.nestedKey] = section;

        if(section.type !== 'contentOnly') {
          newSections[`content-${section.nestedKey}`] = []
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


