import { postUser, postSession, refreshSession, updateValues } from "../utils/sessionApiUtils"
//CONST TYPES
export const SET_CURRENT_USER = 'session/SET_CURRENT_USER'
export const REMOVE_CURRENT_USER = 'sesison/REMOVE_CURRENT_USER'
export const SET_EXPIRATION = 'session/SET_EXPIRATION'
//ACTION CREATOR
export const setCurrentUser = sessionInfo => ({
    type: SET_CURRENT_USER, 
    sessionInfo
})
export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})
export const setExpiration = (expiresAt) => ({
    type: SET_EXPIRATION,
    expiresAt
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
        .then((blob) => {
            updateValues(blob)
            dispatch(setCurrentUser(blob.user))
        })
        
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
        .then((blob) => {
            updateValues(blob)
            dispatch(setCurrentUser(blob.user))
        })
        // .catch(err => console.error(err))
)

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('currentUser')
    dispatch(removeCurrentUser());
}

export const refreshUser = () => dispatch => {
    refreshSession()
    .then(res => {
        if (res.ok){
            return res.json()
        }else{
            throw res
        }
    })
    .then((blob) => {
        updateValues(blob)
        dispatch(setCurrentUser(blob.user))
    })
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
        case SET_EXPIRATION:
            return action.expiresAt
        default:
            return state
    }
}
export default sessionReducer