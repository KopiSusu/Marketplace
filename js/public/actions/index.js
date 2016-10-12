/* @flow */
/*global setTimeout*/
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import {Parse} from 'parse'
// ParseReact sits on top of your Parse singleton
import ParseReact from 'parse-react'

export const selectItem = (item, type) => {
    return {
        type: `SELECT_${type.toUpperCase()}`,
        payload: item
    }
}

export const setQuery = (query) => {
  return {
    type: 'SET_QUERY',
    payload: query
  }
}

export const toggle = (group, boolean, secondaryProperty) => {
    let returnResponse = {
        type: `TOGGLE_${group}`,
        payload: boolean
    }

    if (secondaryProperty)
      returnResponse.secondaryProperty = secondaryProperty

    return returnResponse
}

export const initializePage = (pageJSON, returnType, parms) => {
  let returnResponse = {
    type: returnType,
    payload: pageJSON
  }

  if (parms)
    returnResponse.parms = parms

  return returnResponse
} 

export const receiveData = (json, returnType, nestedKey) => {
  let returnResponse = {
    type: returnType,
    payload: json,
    receivedAt: Date.now()
  }
  if (nestedKey)
    returnResponse.nestedKey = nestedKey

  return returnResponse
}

////////////////////////////////////////////////
////////////////// FETCH DATA //////////////////
////////////////////////////////////////////////

export function fetchData(requestType, idArray, returnType, nestedKey) {
  return function (dispatch) {
    let Query = _exportQueryConstruct(requestType, idArray)
    return Query.find()
      .then(response => { 
        return response
      })
      .then(json => {
        return dispatch(receiveData(json, returnType, nestedKey))
      })
  }
}

////////////////////////////////////////////////
////////////////// POST DATA //////////////////
////////////////////////////////////////////////

export function postData(requestType, postItem, returnType, nestedKey) {
  return function (dispatch) {
    let Query = _exportQueryConstruct(requestType, postItem)
    return Query.save()
      .then(response => { 
        return response
      })
      .then(json => {
        return dispatch(receiveData(json, returnType, nestedKey))
      })
  }
}

///////////////////////////////////////////////////////////
////////////////// Construct Parse Queries //////////////////
///////////////////////////////////////////////////////////

const _exportQueryConstruct = (requestType, items) => {
  let Query
  let innerQuery
  switch(requestType) {
    case 'emailCapture':
      const EmailDrop = Parse.Object.extend("EmailDrop");
      Query = new EmailDrop();

      Query.set("email", items);
      Query.set("source", "marketplace");
      return Query
    case 'User':
      Query = new Parse.Query(Parse.User);
      Query.containedIn("objectId", items);

      return Query
    case 'User Meal':
      Query = new Parse.Query("Meal");
      Query.notEqualTo("deleted", true);
      Query.notEqualTo("hidden", true);
      Query.include("cook");
      Query.ascending("name");

      innerQuery = new Parse.Query(Parse.User);
      innerQuery.containedIn("objectId", items);
      Query.matchesQuery("cook", innerQuery);
      return Query
    default:
      Query = new Parse.Query(requestType);
      Query.include('cook');
      Query.notEqualTo("deleted", true);
      Query.notEqualTo("hidden", true);
      Query.containedIn("objectId", items);
      return Query
  }
}

///////////////////////////////////////////////////////////
////////////////// Socket API /////////////////////////////
///////////////////////////////////////////////////////////

// temp test
export const sendData = (query) => {
  const tempQuery = {username: "2027143646", password: "mouse"}

  return {
    meta: {remote: true},
    type: 'LOGIN_USER',
    payload: tempQuery
  }

}



