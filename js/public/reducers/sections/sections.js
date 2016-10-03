// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import _ from 'lodash'

const initalState = { 
  isFetching: false,
  selectedSection: null,
  sectionIndex: [],
  listIndex: []
}

export default (state = Object.assign({}, initalState), action) => {

  switch (action.type) {
    case 'SELECT_SECTION':
      return Object.assign({}, state, {
        isFetching: false,
        selectedSection: action.payload
      });
    case '_INITIALIZE_PAGE':
      let newSections =  Object.assign({}, initalState)
      
      initalState.sectionIndex = []
      initalState.listIndex = []
      
      _.forEach(action.payload, (section) => {
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


