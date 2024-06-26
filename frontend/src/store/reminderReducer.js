import { createSelector } from "reselect";
import { getUserReminders, getPetReminders, getReminder, postReminder, editReminder, deleteReminder } from "../utils/reminderApiUtils";

//CONST TYPES
export const RECEIVE_REMINDERS = 'reminders/RECEIVE_REMINDERS'
export const RECEIVE_REMINDER = 'reminders/RECEIVE_REMINDER'
export const REMOVE_REMINDER = 'reminders/REMOVE_REMINDER'

//ACTION CREATOR
export const receiveReminders = reminders => ({
    type: RECEIVE_REMINDERS,
    reminders
})

export const receiveReminder = reminder => ({
    type: RECEIVE_REMINDER,
    reminder
})

export const removeReminder = reminderId => ({
    type: REMOVE_REMINDER,
    reminderId
})
//THUNK CREATOR
export const fetchUserReminders = (userId) => dispatch => (
    getUserReminders(userId)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(userReminder => dispatch(receiveReminders(userReminder)))
        .catch(err => console.error(err))
)

export const fetchPetReminders = (petId) => dispatch => (
    getPetReminders(petId)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(petReminder => dispatch(receiveReminders(petReminder)))
        .catch(err => console.error(err))
)
export const fetchReminder = (reminderId) => dispatch => (
    getReminder(reminderId)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(reminder => dispatch(receiveReminder(reminder)))
        .catch(err => console.error(err))
)
export const createReminder = (reminderInfo) => async dispatch => {
    const res = await postReminder(reminderInfo)

    if (res.ok) {
        return dispatch(receiveReminder(await res.json()))
    }else {
        throw res
    }
}
export const updateReminder = (reminderInfo) => async dispatch => {
    const res = await editReminder(reminderInfo)
    if (res.ok){
        return dispatch(receiveReminder(await res.json()))
    }else {
        throw res
    }
}

export const destroyReminder = (reminderId) => dispatch => (
    deleteReminder(reminderId)
        .then(res => {
            if (res.ok) {
                dispatch(removeReminder(reminderId))
                return res.json()
            } else {
                throw res
            }
        })
        .catch(err => console.error(err))
)


//SELECTOR
export const selectReminders = createSelector(
    state => state.reminders, 
    reminders => {
        const reminderArray = Object.values(reminders)
        reminderArray.sort((first, second) => new Date(first.dueDate) - new Date(second.dueDate))
        return reminderArray
    })
export const currentReminder = reminderId => state => state.reminders[reminderId]

//REDUCER

const reminderReducer = (state={}, action) => {
    const newState = {...state}
    switch(action.type) {
        case RECEIVE_REMINDER:
            return {...state, [action.reminder._id]: action.reminder}
        case RECEIVE_REMINDERS:
            return action.reminders
        case REMOVE_REMINDER:
            delete newState[action.reminderId]
            return newState
        default:
            return state
    }
}

export default reminderReducer