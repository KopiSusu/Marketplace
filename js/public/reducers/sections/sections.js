// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const sections = [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "Homemade is a <style>curated marketplace for small batch producers.<style> Enjoy some of these delicious cookies made by one of our fantastic chefs.",
    "style": {
      "fontSize": "22px",
      "lineHeight": "1.5"
    },
    "contentStyle": {
      "color": "#F87974",
      "borderBottom": "1px dotted #F87974"
    }
  },
  {
    "nestedKey" : "Hot",
    "type" : "cardList",
    "title" : "Hot Plates",
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
    "type" : "profileListImageOnly",
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
      let newSections = Object.assign({}, state, newSections);

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
    case '_FETCH_REVIEWS':
      let newReview = Object.assign({}, state);
      newReview[`content-${action.nestedKey}`][action.nestedIndex].set("totalReviews", action.payload.length)
      newReview[`content-${action.nestedKey}`][action.nestedIndex].set("averageReview", _caluclateAverageRating(action.payload))      
      return newReview
    default:
      return state
  }
}; 

const _caluclateAverageRating = (reviews) => {
  let _reviewsSum = 0;
  for(let i = 0; i < reviews.length; i++) {
    _reviewsSum += reviews[i].get("rating");
  }
  return _reviewsSum / reviews.length;
}




