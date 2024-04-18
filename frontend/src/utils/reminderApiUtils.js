import jwtFetch from "./jwt";

export const getUserReminders = userId => (
    jwtFetch(`/api/reminders/user/${userId}`, {
        method: 'GET'
    })
)

export const getPetReminders = petId => (
    jwtFetch(`/api/reminders/pet/${petId}`, {
        method: 'GET'
    })
)
export const getReminder = reminderId => (
    jwtFetch(`/api/reminders/${reminderId}`, {
        method: 'GET'
    })
)

export const postReminder = reminderInfo => (
    jwtFetch(`/api/reminders`, {
        method: 'POST',
        body: JSON.stringify(reminderInfo)
    })
)
export const editReminder = reminderInfo => (
    jwtFetch(`/api/reminders/${reminderInfo._id}`, {
        method: 'PUT',
        body: JSON.stringify(reminderInfo)
    })
)
export const deleteReminder = reminderId => (
    jwtFetch(`/api/reminders/${reminderId}`, {
        method: 'DELETE'
    })
)