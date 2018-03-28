// pkgs
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// - redux
import rootReducer from './reducers'
// -

import App from './App'
import Login from './Login'


const initialState = {
  isLoggedIn: false
}

const store = createStore(rootReducer, initialState,  composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())
render(
  <Provider store={store}>
      <Router>
          <div>
              <Route exact path="/" component={Login} />
              <Route exact path="/app" component={App} />
          </div>
      </Router>
  </Provider>,
document.getElementById('root'))
