import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {Auth, Contacts} from "./reducers";

const logger = createLogger({
    diff: true,
    collapsed: true
})
const store = createStore(
    combineReducers({Auth, Contacts}),
    applyMiddleware(logger, thunk)
)

export default store;