import { combineReducers } from "redux"
import { createStore } from "redux"


const axios = require('axios')


const reducerLogin = ( isLoggedIn = false, action ) => {
    //  const isLoggedIn_axios = await /*запрос*/
    switch( action.type ) {
        case 'loginAttempt':
            console.log('action.data', action.data)
            return action.data

        default:
            return isLoggedIn
    }
}


const rootReducer = combineReducers({
    isLoggedIn: reducerLogin
})
export default rootReducer
