import { combineReducers } from "redux"
import { createStore } from "redux"


const axios = require('axios')


const reducerLogin = ( isLoggedIn = false, action ) => {
    //  const isLoggedIn_axios = await /*запрос*/
    switch( action.type ) {
        case 'loginAttempt':
            var qs = require('qs')
            let axiosConfig = {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": "JSESSIONID=5f996b4f9ef0c3368387e9f7cced; JSESSIONID=5f48eda106f2c43db1a51dee1338; treeForm_tree-hi=treeForm:tree:applications",
                "Host": "localhost:46080",
                "Referer": "http://localhost:46080/lab42964346056370179845/",
                }
            };
            var postData = {
              login: action.username,
              password: action.password
            };
            

            return true
                //.then( response => response.json() )
                //.then( 
                /*
                  .then( (response) => {
                  console.log((typeof(response.data)), ((response.data)))
                  return true
                })*/
                
        default:
          return isLoggedIn
    }
}

// function login(state = [], action, isLoggedIn = false) {
//   switch( action.type ) {
//         case 'loginAttempt':
//             var qs = require('qs');
//             let axiosConfig = {
//               headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 "Access-Control-Allow-Origin": "*",
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Cookie": "JSESSIONID=5f996b4f9ef0c3368387e9f7cced; JSESSIONID=5f48eda106f2c43db1a51dee1338; treeForm_tree-hi=treeForm:tree:applications",
//                 "Host": "localhost:46080",
//                 "Referer": "http://localhost:46080/lab42964346056370179845/",
//                 }
//             };
//             var postData = {
//               login: action.username,
//               password: action.password
//             };
//             axios.post('http://localhost:46080/lab42964346056370179845/rest/user/login', qs.stringify({"login": action.username, "password": action.password})
//               , axiosConfig)
            
//             .then( (response) => {
//               console.log((typeof(response.data)), ((response.data)))
//               // state.isLoggedIn = response.data
//               return response.data
//             })
//         default:
//           return state
//     }
// }

// const reducerThrowPoint = ( isLoggedIn = false, action ) => {
//     switch( action.type ) {
//         case 'loginAttempt':
//             axios.post('http://localhost:46080/lab42964346056370179845/rest/user/login', {
//               username: action.username,
//               password: action.password
//             })
//             .then( (response) => {
//               return response.json().isLoggedIn
//             })
//         default:
//           return isLoggedIn
//     }
// }


const rootReducer = combineReducers({
    isLoggedIn: reducerLogin
})
export default rootReducer