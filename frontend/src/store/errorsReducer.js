const SESSION_ALERT = 'errors/SESSION_ALERT'

export const setSessionAlert = (boolean) => ({
    type: SESSION_ALERT,
    boolean
})

export const selectSessionStatus = state => state.errors.session

const initialState = {
    session: false
}

const errorsReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch(action.type){
        case SESSION_ALERT:
            return { ...newState, session: action.boolean}
        default:
            return state
    }
}

export default errorsReducer