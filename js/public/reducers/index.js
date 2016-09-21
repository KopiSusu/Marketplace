/* @flow */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app/app'
import auth from './auth/auth'
import sections from './sections/sections'
import search from './search/search'

const rootReducer = combineReducers({
	app: app,
	auth: auth,
	sections: sections,
	search: search,
	routing: routerReducer
});

export default rootReducer;

