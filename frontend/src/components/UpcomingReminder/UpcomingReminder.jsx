import './UpcomingReminder.css'
import {useDispatch} from 'react-redux' 
import {fetchUserReminders, selectReminder} from '../../store/reminderReducer'
import { selectCurrentUser } from "../../store/sessionReducer"
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe, faPills} from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck} from "@fortawesome/free-regular-svg-icons"

const UpcomingReminder = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const reminders = useSelector(selectReminder) //all reminders [{}, {},..]
    const currentUserReminder = reminders.filter(ele  => ele.user === currentUser._id.toString())
    const [typeState, setTypeState] = useState('')

    useEffect(() => {
        dispatch(fetchUserReminders(currentUser._id))
    }, [dispatch])

    const today = new Date()
    const upcomingReminders = currentUserReminder.filter((ele,idx) => {
        let due = new Date(currentUserReminder[idx].dueDate)
        let diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        if(diff <= 5) {
            return ele
        }
    })

    console.log(upcomingReminders)

    return(
        <>
            {upcomingReminders.map((ele, idx) => (

                <div key={idx} className='upcoming-reminder-container'>
                    <div className={`upcoming-reminder-${typeState}-icon`}>
                        {ele.type === 'appointment' && <FontAwesomeIcon className="appointment-icon" icon={faCalendarCheck} style={{fill: "black"}}size="xl"/>}
                        {ele.type === 'vaccination' && <FontAwesomeIcon className="vaccination-icon" icon={faSyringe} size="xl"/>}
                        {ele.type === 'medication' && <FontAwesomeIcon className="medication-icon" icon={faPills} size="xl" />}       
                    </div>
 
                    <div className='upcoming-reminder-content'>
                        <div>{ele.title}</div>
                    </div>
                    <div className='upcoming-reminder-pet'>
                        <div></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingReminder