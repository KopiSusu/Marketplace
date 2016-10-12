// Build Chat Reducer Here!
// Feel free to copy other reducers
import * as  Actions from './../../actions'
import profile from './sceneJson/profile.js'
import featured from './sceneJson/featured.js'
import producers from './sceneJson/producers.js'
import products from './sceneJson/products.js'
import product from './sceneJson/product.js'

import _ from 'lodash'

const initalState = { 
    isFetching: false,
    selectedSection: null,
    scrollPosition: 0
}

const JSONlist = {
    profile,
    featured,
    products,
    product,
    producers
}

export default (state = Object.assign({}, initalState), action) => {
    let newSection = Object.assign({}, state);      
    switch (action.type) {
        case '_CAPTURE_EMAIL':
            return Object.assign({}, state, {
                isFetching: false,
                emailCaptured: true
            }); 
        case 'SELECT_SECTION':
            return Object.assign({}, state, {
                isFetching: false,
                selectedSection: action.payload
            });
        case '_INITIALIZE_PAGE':
            let newSections = Object.assign({}, { isFetching: false, selectedSection: null }, _constructPageJSON(JSONlist[action.payload], action.parms))
            return newSections;
        case '_FETCH_SECTION':
            newSection[`content-${action.nestedKey}`] = action.payload
            return newSection
        case 'SET_SCROLL':
            newSection.scrollPosition = action.payload
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

        if(section.initalSelected)
            json['selectedSection'] = section.initalSelected
            json['scrollPosition'] = 0;
        if(section.type.indexOf('contentOnly') < 0) {
            json[`content-${section.nestedKey}`] = []
            json['listIndex'].push(section.nestedKey)

            if(section.type.indexOf('capture email') > -1)
                json['emailCaptured'] = false

            if(parms)
                json[section.nestedKey].queries = [parms]
        }

        json.sectionIndex.push(section.nestedKey);
    })

    return json
}




