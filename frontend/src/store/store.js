import { combineReducers, legacy_createStore, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger"

const rootReducer = combineReducers({
    //reducers go here
})

const configureStore = (initialState) => {
    return legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
}

export default configureStore