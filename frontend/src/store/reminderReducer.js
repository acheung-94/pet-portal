import { createSelector } from "@reduxjs/toolkit";
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
export const createReminder = (reminderInfo) => dispatch => (
    postReminder(reminderInfo)
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
export const updateReminder = (reminderInfo) => dispatch => (
    editReminder(reminderInfo)
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
export const destroyReminder = (reminderId) => dispatch => (
    deleteReminder(reminderId)
        .then(res => {
            if(res.ok) {
                dispatch(removeReminder(reminderId))
            } else {
                throw res
            }
        })
        .catch(err => console.error(err))
)

//SELECTOR
export const selectReminder = createSelector(state => state.reminders, reminders => Object.values(reminders))
export const currentReminder = reminderId => state => state.reminders[reminderId]

//REDUCER
const initialState = { 
    appointment: {},
    vaccination: {},
    medication: {} 
}
const reminderReducer = (state=initialState, action) => {
    const newState = {...state}
    switch(action.type) {
        case RECEIVE_REMINDER:
            return {
                ...state,
                [action.reminder.type]: {
                ...state[action.reminder.type],
                [action.reminder._id]: action.reminder
                }
            };
        case RECEIVE_REMINDERS:
            action.reminders.forEach(reminder => {
                newState[reminder.type][reminder._id] = reminder;
            });
            return newState;
        case REMOVE_REMINDER:
            const { appointment, vaccination, medication } = newState
            appointment.forEach(appt => {
                if(appt._id === action.reminderId) {
                    delete appointment[action.reminderId]
                }
            })
            vaccination.forEach(vax => {
                if(vax._id === action.reminderId) {
                    delete vaccination[action.reminderId]
                }
            })
            medication.forEach(med => {
                if(med._id === action.reminderId) {
                    delete medication[action.reminderId]
                }
            })
            return newState
        default:
            return state
    }
}

export default reminderReducer