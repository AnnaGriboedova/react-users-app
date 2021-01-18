import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import usersReducer from "./usersReducer";

import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    usersPage: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;