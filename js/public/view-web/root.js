import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Parse from 'parse';
import {fetchJSON} from './../actions';
import _ from 'lodash';
import {configureStore} from "./../store/configure-store";

import Scene from "./scene/scene.js"
import Styleguide from "./scene/styleguide.js"



//Production Keys
Parse.initialize("zAOPmmOBH8zN9r5iX6LFHFxLJEnycHIqV7a7QO5F", "z8IhWLkM0NWV82CvWBeKttjVTgKkGib3ICzCyMnN");
Parse.serverURL = 'https://api.eathomemade.com/parse';

// Add the reducer to your store on the `routing` key
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

// Configure View
store.dispatch({
  type: '_FETCH_APP'
})
ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={Scene}>
        <IndexRoute component={Scene}/>

        <Route path="/p" component={Scene}>
          <Route path=":productID" component={Scene}>
          </Route>
        </Route>

        <Route path="styleguide" component={Styleguide}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('App')
)