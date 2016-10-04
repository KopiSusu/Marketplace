// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import marketplace from './sceneJson/marketplace.js'
import producer from './sceneJson/producer.js'

import _ from 'lodash'

const initalState = { 
    isFetching: false,
    selectedSection: null
}

const JSONlist = {
    marketplace,
    producer
}

export default (state = Object.assign({}, initalState), action) => {

    switch (action.type) {
        case 'SELECT_SECTION':
            return Object.assign({}, state, {
                isFetching: false,
                selectedSection: action.payload
            });
        case '_INITIALIZE_PAGE':
            let newSections = Object.assign({}, { isFetching: false, selectedSection: null }, _constructPageJSON(JSONlist[action.payload], action.parms))
            return newSections;
        case '_FETCH_SECTION':
            let newSection = Object.assign({}, state);      
            newSection[`content-${action.nestedKey}`] = action.payload
            return newSection
        default:
            return state
    }
}; 

const _constructPageJSON = (pageJSON, parms) => {
    const json = {}
  
    json.sectionIndex = []
    json.listIndex = []

    _.forEach([...pageJSON], (section) => {
        json[section.nestedKey] = section;

        if(section.type.indexOf('contentOnly') < 0) {
            json[`content-${section.nestedKey}`] = []
            json['listIndex'].push(section.nestedKey)
            json['selectedSection'] = section.nestedKey

            if(parms)
                json[section.nestedKey].queries = [parms]
        }

        json.sectionIndex.push(section.nestedKey);
    })

    return json
}




