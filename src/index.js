// pkgs
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
// inner imps
import { createLogger } from "redux-logger";
// - redux
import rootReducer from './reducers'
// -

import App from './App'
import Login from './Login'

const logger = createLogger();

const initialState = {
  isLoggedIn: true
}
const store = createStore(rootReducer, initialState,  applyMiddleware(logger))
console.log(store.getState())
render(
  <Provider store={store}>
      <Router>
          <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/app" component={App} /> 
              </div>      
              </Router>   
              </Provider>   
              ,   
              document.getElementById('root'))