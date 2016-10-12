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
	debugger
	// do socket switch here, need to build out
	// primarily check for errors.
	// send back ERROR_TYPE to reducer if failed <--- this will be its own error reducer
	// send back SUCCESS_TYPE to reducer if success <--- this will go down normal path

}

export default initSocket

