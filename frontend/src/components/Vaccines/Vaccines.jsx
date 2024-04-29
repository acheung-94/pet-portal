import '../Vaccines/Vaccines.css'
import { dateProximityIcon } from '../../utils/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux';
import { destroyReminder } from '../../store/reminderReducer';
const Vaccines = ({reminders, setModalState, setCurrentReminder}) => {

    const dispatch = useDispatch();

    const vaccinesList = reminders.filter(reminder => reminder.type === 'vaccination');

    const handleDelete = (reminderId, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(destroyReminder(reminderId))
    }

    return (
        <>
            {vaccinesList &&
                Object.values(vaccinesList).map((vac, idx) => (
                    <div key={idx} className='vaccine-info-container'
                        >
                        <div className='vaccine-header'>
                            <div className='vaccine-desc'>
                                <p>{vac.title}</p>
                                <div className='edit-del-reminder'>
                                    <FontAwesomeIcon className="edit-del-icons pen" icon={faPenToSquare} 
                                        onClick={()=>{
                                            setCurrentReminder(vac)
                                            setModalState('edit')
                                        }}
                                    />
                                    <FontAwesomeIcon className="edit-del-icons trash" icon={faTrashCan}
                                        onClick={(e)=>{
                                            handleDelete(vac._id, e)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='vaccine-date'>
                                <p>Due: {new Date(vac.dueDate).toLocaleDateString('en-US')}</p>
                                <img src={dateProximityIcon(vac.dueDate)}
                                    className='proximity-icon' />
                            </div>
                        </div>
                    </div>

                ))
            }
            { !vaccinesList.length && (
                    <div className="empty-reminders">
                        Click the <span>+</span> icon to add a reminder!
                    </div>
            )}
        </>
    )
}

export default Vaccines