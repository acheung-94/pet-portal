import '../Appointments/Appointments.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { destroyReminder } from '../../store/reminderReducer'

const Appointments = ({reminders, setModalState, setCurrentReminder}) => {
    const dispatch = useDispatch();

    const appointmentsList = reminders.filter(reminder => reminder.type === 'appointment');
    
    const formatDateTime = (dateString) => {
        const aptDate = new Date(dateString)
        const date = aptDate.toLocaleDateString('en-US')
        let hours = aptDate.getHours();
        const minutes = aptDate.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const hoursStr = hours.toString(); 
        const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    
        const time = `${hoursStr}:${minutesStr} ${ampm}`;
    
        return `${date} - ${time}`;
    }

    const handleDelete = (reminderId, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(destroyReminder(reminderId))
    }
    
    return (
        <>
            {appointmentsList &&
               appointmentsList.map((apt, idx) => (
                    <div key={idx} className='appointment-info-container' 
                            onClick={()=> {
                                setCurrentReminder(apt)
                                setModalState('edit')
                                }}>
                        <div className='appointment-header'>
                            <div className='appointment-title'>
                                <p>{apt.title}</p>
                                <div className='edit-del-reminder'>
                                    <FontAwesomeIcon className="edit-del-icons pen" icon={faPenToSquare} 
                                        onClick={()=>{
                                            setCurrentReminder(apt)
                                            setModalState('edit')
                                        }}
                                    />
                                    <FontAwesomeIcon className="edit-del-icons trash" icon={faTrashCan}
                                        onClick={(e)=>{
                                            handleDelete(apt._id, e)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='appointment-date'>
                                <p>{formatDateTime(apt.dueDate)}
                                </p>
                            </div>
                        </div>
                        <div className='reminder-divider'></div>
                        <div className='appointment-content'>
                            <div className='appointment-desc'>
                                <p>{apt.description}</p>
                            </div>
                            <div className='appointment-loc'>
                                <p>{apt.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            { !appointmentsList.length && (
                <div className="empty-reminders">
                    Click the <span>+</span> icon to add a reminder!
                </div>
            )}
        </>
    )
}

export default Appointments