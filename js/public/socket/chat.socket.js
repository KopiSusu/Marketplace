import io from 'socket.io-client';
import React from 'react';

import {
	fetchData
} from './../actions'


export const initSocket = () => {
	const serverAddress = `${location.protocol}//159.203.179.180:3000`;
	const socket = io(serverAddress);

	return socket;
}


export const configListener = (store, socket) => {
	socket.on('connect', function (action, data) {
		// inital connect logic
		debugger
	});

	// We should determin several different error types and a catch all type.
	socket.on('_ACTION', function (action, data) {
		// Distpact action directly to store	
		debugger
		store.dispatch()
	});

	// we should determin several different error types and a catch all type.
	socket.on('_ERROR', function (action, data) {
		// Distpact action directly to store
		debugger		
		store.dispatch()
	});


	// do socket switch here, need to build out
	// primarily check for errors.
	// send back ERROR_TYPE to reducer if failed <--- this will be its own error reducer
	// send back SUCCESS_TYPE to reducer if success <--- this will go down normal path

}

export default initSocket

