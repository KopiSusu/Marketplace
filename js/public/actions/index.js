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

export const submitMessage = (message) => {
  return {
    meta: {remote: true},
    type: 'SUBMIT_MESSAGE',
    payload: message
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
export function fetchData(idArray, returnType, nestedKey) {
  return function (dispatch) {
    let mealsQuery = new Parse.Query('Meal');
    mealsQuery.include('cook');
    mealsQuery.notEqualTo("deleted", true);
    mealsQuery.containedIn("objectId", idArray);
    return mealsQuery.find()
      .then(response => {
        return response
      })
      .then(json => {        
        return dispatch(receiveData(json, returnType, nestedKey))
      })
  }
}
