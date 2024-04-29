import '../Medications/Medications.css'
import { dateProximityIcon } from '../../utils/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { destroyReminder } from '../../store/reminderReducer'
const Medications = ({reminders, setModalState, setCurrentReminder}) => {

    const dispatch = useDispatch();

    const medicationsList = reminders.filter(reminder => reminder.type === 'medication');

    const handleDelete = (reminderId, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(destroyReminder(reminderId))
    }

    return (
        <>
            {medicationsList &&
                Object.values(medicationsList).map((med, idx) => (
                    <div key={idx} className='medication-info-container'>
                        <div className='medication-header'>
                            <div className='medication-title'>
                                <p>{med.title}</p>
                                <div className='edit-del-reminder'>
                                    <FontAwesomeIcon className="edit-del-icons pen" icon={faPenToSquare} 
                                        onClick={()=>{
                                            setCurrentReminder(med)
                                            setModalState('edit')
                                        }}
                                    />
                                    <FontAwesomeIcon className="edit-del-icons trash" icon={faTrashCan}
                                        onClick={(e)=>{
                                            handleDelete(med._id, e)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='medication-date'>
                                <p>Due: {new Date(med.dueDate).toLocaleDateString('en-US')}</p>
                                <img src={dateProximityIcon(med.dueDate)}
                                    className='proximity-icon'/>
                            </div>
                        </div>
                        <div className='reminder-divider'></div>
                        <div className='medication-content'>
                            <p>{med.description}</p>
                        </div>
                    </div>
                ))
            }
            { !medicationsList.length && (
                <div className="empty-reminders">
                    Click the <span>+</span> icon to add a reminder!
                </div>
            )}
            
        </>
    )
}

export default Medications