export const K9_VAX = ['Rabies', 
'Distemper/Parvo', 
'Leptospirosis', 
'Bordetella', 
'Influenza', 
'Lyme', 
'Rattlesnake']
export const FEL_VAX = [
'Rabies',
'FVRCP',
'FELV'
]
export const APPT_TYPES = [
"Wellness",
"Illness",
"Procedure"
]
export const MEDS = [
"Flea/Tick Prevention",
"Heartworm Prevention"
]

export const ICONS = {
    green: "https://pet-portal-assets.s3.us-west-1.amazonaws.com/check-mark-circle-2-svgrepo-com.svg",
    upcoming: "https://pet-portal-assets.s3.us-west-1.amazonaws.com/clock-ui-web-svgrepo-com.svg",
    overdue: "https://pet-portal-assets.s3.us-west-1.amazonaws.com/exclamation-triangle-svgrepo-com.svg"
}

export const dateProximityIcon = (dueDateString) => {
    const today = new Date()
    const dueDate = new Date(dueDateString)

    if (today >= dueDate) {
        return ICONS.overdue
    }

    let dueMonth = dueDate.getMonth()
    let year = dueDate.getFullYear()
    let day = dueDate.getDate()
    let adjMonth = dueMonth - 2

    if (adjMonth < 0) {
        adjMonth += 12
        year -= 1
        
    }
    if (adjMonth === 2){
        day = 28
    }
    const dueProximity = new Date(year, adjMonth, day)

    if (today >= dueProximity && today <= dueDate){
        return ICONS.upcoming
    }

    return ICONS.green

}
