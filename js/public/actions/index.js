/* @flow */
/*global setTimeout*/
import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import {Parse} from 'parse'
// ParseReact sits on top of your Parse singleton
import ParseReact from 'parse-react'

export const selectGroup = (group) => {
    return {
        type: 'SELECT_GROUP',
        payload: group
    }
}

export const toggle = (group, boolean) => {
    return {
        type: `TOGGLE_${group}`,
        payload: boolean
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
  let Query;
  switch(requestType) {
    case 'User':
      Query = new Parse.Query(Parse.User);
      Query.containedIn("objectId", idArray);
      return Query
    default:
      Query = new Parse.Query(requestType);
      Query.include('cook');
      Query.notEqualTo("deleted", true);
      Query.containedIn("objectId", idArray);
      return Query
  }
}