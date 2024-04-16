import { combineReducers, legacy_createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger"
import sessionReducer from './sessionReducer'
import petReducer from "./petReducer"

const rootReducer = combineReducers({
    session: sessionReducer,
    pet: petReducer
})

const configureStore = (initialState) => {
    return legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}

export default configureStore