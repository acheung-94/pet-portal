import { redirect } from "react-router-dom"
import { postUser, postSession } from "../utils/sessionApiUtils"

//CONST TYPES
export const SET_CURRENT_USER = 'session/SET_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'sesison/REMOVE_CURRENT_USER'

//ACTION CREATOR
export const setCurrentUser = sessionInfo => ({
    type: SET_CURRENT_USER, 
    sessionInfo
})
export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})

//THUNK CREATOR
export const createUser = userInfo => dispatch => (
    postUser(userInfo)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(({user, token}) => {
            console.log(token)
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('currentUser', JSON.stringify(user))
            dispatch(setCurrentUser(user))
        })
        .catch(err => console.error(err))
)

export const loginUser = sessionInfo => dispatch => (
    postSession(sessionInfo)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else { 
                throw res
            }
        })
        .then(({user, token}) => {
            
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('currentUser', JSON.stringify(user))
            dispatch(setCurrentUser(user))
            redirect('/dashboard')
        })
        .catch(err => console.error(err))
)

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('currentUser')
    dispatch(removeCurrentUser());
}

//SELECTOR
export const selectCurrentUser = state => state.session

//REDUCER
const initialState = JSON.parse(localStorage.getItem('currentUser')) || null;
const sessionReducer = (state=initialState, action) => {
    //const newState = {...state}
    switch(action.type) {
        case SET_CURRENT_USER:
            return action.sessionInfo
        case REMOVE_CURRENT_USER:
            return null
        default:
            return state
    }
}
export default sessionReducer