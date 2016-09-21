// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const sections = [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "Homemade is a <style>curated marketplace for small batch producers.<style> Every vendor sources responsibly and sells direct to consumers through us. This is how business is meant to be done.",
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
    "nestedKey" : "Cookies",
    "type" : "cardList",
    "title" : "Homemade Cookies",
    "requestType": "Meal",
    "queries": [
      "HXUGkW5J5N", 
      "DVAFrotMng", 
      "KU4JnBOXsI", 
      "EPqInn8k2o", 
      "cmlG8zrDdU", 
      "s0yHrrNgKy",
      "NeoLvlvlrT",
      "s71ECwHFEX",
      "FBFF8AFT2I",
      "menFtSGiA3",
      "6V9XkWcTh9",
      "g91nDfQ4K0",
      "P389nT5dwy",
      "oAy0oghMdB",
      "Ek8lSB0Od9" 
    ]
  },
  {
    "nestedKey" : "Chefs",
    "type" : "profileListImageOnly",
    "title" : "Featured Chefs",
    "requestType": "User",
    "callbackTypes": "Review",
    "queries": [
      "AyfD3njgLV", 
      "SYW3vDTJ03", 
      "DyV2nAGCAs", 
      "mEWIEU9qqL", 
      "p3QfkwB4LM", 
      "uqyFHTY2xP", 
      "e1bImZvhyV", 
      "C9Zy1J2KUz"
    ]
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




