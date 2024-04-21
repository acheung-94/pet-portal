import './UpcomingReminder.css'
import {useDispatch} from 'react-redux' 
import {fetchUserReminders, selectReminders} from '../../store/reminderReducer'
import { selectPets } from '../../store/petReducer'
import { selectCurrentUser } from "../../store/sessionReducer"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe, faPills} from "@fortawesome/free-solid-svg-icons"
import { faCalendarCheck} from "@fortawesome/free-regular-svg-icons"

const UpcomingReminder = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const reminders = useSelector(selectReminders) //all reminders [{}, {},..]
    const currentUserReminder = reminders.filter(ele  => ele.user === currentUser._id.toString())
    const pets = useSelector(selectPets)
    const pets = useSelector(selectPets)
    const today = new Date()
    const diffDays = []
    const petIds = []
    
    
    const upcomingReminders = currentUserReminder.filter((ele,idx) => {
        let due = new Date(currentUserReminder[idx].dueDate)
        let diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        if(diff <= 5 && diff >= 0) {
        if(diff <= 5 && diff >= 0) {
            diffDays.push(diff)
            petIds.push(ele.pet)
            return ele
        }
    })
    
    const petNames = []
    const petImages = []

    for(let i = 0; i< petIds.length; i++) {
        for(let j = 0; j < pets.length; j++) {
            if(petIds[i] && petIds[i] === pets[j]._id) {
                petNames.push(pets[j].name)
                petImages.push(pets[j].imageUrl)
                break
            } else if(petIds[i] === undefined){
                petNames.push(undefined)
                petImages.push(undefined)
                break
            }
        }
    }

    useEffect(() => {
        dispatch(fetchUserReminders(currentUser._id))
    }, [dispatch, currentUser._id], upcomingReminders)
    useEffect(() => {
        dispatch(fetchUserReminders(currentUser._id));
    }, [dispatch, currentUser._id]);
    return(
        <>
            {upcomingReminders.map((ele, idx) => (

                <div key={idx} className='upcoming-reminder-container'>
                    <div className='upcoming-reminder-icon-container'>
                        <div className={`upcoming-reminder-icon`}>
                        <div className={`upcoming-reminder-icon`}>
                            {ele.type === 'appointment' && <FontAwesomeIcon className="appointment-icon" icon={faCalendarCheck} size="xl"/>}
                            {ele.type === 'vaccination' && <FontAwesomeIcon className="vaccination-icon" icon={faSyringe} size="xl"/>}
                            {ele.type === 'medication' && <FontAwesomeIcon className="medication-icon" icon={faPills} size="xl" />}       
                        </div>
                        <div className='upcoming-reminder-type'>
                            {ele.type === 'appointment' && 'appointment'}
                            {ele.type === 'vaccination' && 'vaccination'}
                            {ele.type === 'medication' && 'medication'}       
                        </div>
                    </div>
 
                    <div className='upcoming-reminder-content'>
                        <div>{ele.title}</div>
                        <div className='upcoming-reminder-pet-name'>
                            {petNames[idx] && <p>{petNames[idx]}</p>}
                        </div>
                        <div className='upcoming-pet-image'>
                            {petImages[idx] && <img id='upcoming-pet-image' src={petImages[idx]}/>}
                        </div>
                    </div>
                    <div className='upcoming-reminder-pet'>
                        <div className='upcoming-days'>
                            {(diffDays[idx] === 0) && <p>due date</p> }
                            {(diffDays[idx] > 0) &&  <p>in {diffDays[idx]} days</p> }
                            {(diffDays[idx] === 0) && <p>due date</p> }
                            {(diffDays[idx] > 0) &&  <p>in {diffDays[idx]} days</p> }
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default UpcomingReminder