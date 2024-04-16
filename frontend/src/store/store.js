import { combineReducers, legacy_createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger"
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({
    session: sessionReducer
})

const configureStore = (initialState) => {
    return legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}

export default configureStore