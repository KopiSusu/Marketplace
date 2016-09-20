// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const sections = [
  {
    "nestedKey" : "topText",
    "type" : "contentOnly",
    "text" : "Northern Provisions is a <style>curated marketplace for small batch producers.<style> Every vendor sources responsibly and sells direct to consumers through us. This is how business is meant to be done.",
    "style": {
      "fontSize": "22px",
      "lineHeight": "1.5"
    },
    "contentStyle": {
      color:'#F87974',
      borderBottom:'1px dotted #F87974'
    }
  },
  {
    "nestedKey" : "Baked",
    "type" : "default",
    "title" : "Baked Goods",
    "queries": ["tRLFjE7Fby", "wDq31PFCHb", "sNmaUrMIpR"]
  },
  {
    "nestedKey" : "Canned",
    "type" : "default",
    "title" : "Canned Goods",
    "queries": ["tRLFjE7Fby", "wDq31PFCHb", "sNmaUrMIpR", "NflccRJiAr", "VMFxv0py2L"]
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
        if(section.type !== 'contentOnly')
          newSections[`content-${section.nestedKey}`] = []

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