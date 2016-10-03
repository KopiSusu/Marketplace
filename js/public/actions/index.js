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

export const initializePage = (pageJSON, returnType) => {
  return {
    type: returnType,
    payload: pageJSON
  }
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
const _exportQueryConstruct = (requestType, idArray) => {
  let Query
  let innerQuery
  switch(requestType) {
    case 'User':
      Query = new Parse.Query(Parse.User);
      Query.containedIn("objectId", idArray);

      return Query
    case 'User Meal':
      Query = new Parse.Query("Meal");
      Query.notEqualTo("deleted", true);
      Query.notEqualTo("hidden", true);
      Query.include("cook");
      Query.ascending("name");

      innerQuery = new Parse.Query(Parse.User);
      innerQuery.containedIn("objectId", idArray);
      Query.matchesQuery("cook", innerQuery);
      return Query
    default:
      Query = new Parse.Query(requestType);
      Query.include('cook');
      Query.notEqualTo("deleted", true);
      Query.notEqualTo("hidden", true);
      Query.containedIn("objectId", idArray);
      return Query
  }
}