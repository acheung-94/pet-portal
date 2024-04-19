import { useDispatch, useSelector } from 'react-redux'
import '../Appointments/Appointments.css'
import { fetchPets } from '../../store/petReducer';
import { fetchPetReminders } from '../../store/reminderReducer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Appointments = () => {
    const dispatch = useDispatch()
    const { petId } = useParams()
    const reminders = useSelector(state => state.reminders)

    useEffect( () => {
        dispatch(fetchPets())
        dispatch(fetchPetReminders(petId))
    }, [petId, dispatch])

    const appointmentsList = Object.values(reminders).filter(reminder => reminder.type === 'appointment');

    return (
        <>
            {appointmentsList &&
               appointmentsList.map((apt, idx) => (
                    <div key={idx} className='appointment-info-container'>
                        <div className='appointment-header'>
                            <div className='appointment-title'>
                                <p>{apt.title}</p>
                            </div>
                            <div className='appointment-date'>
                                <p>{new Date(apt.dueDate).toLocaleDateString('en-US')}</p>
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
        </>
    )
}

export default Appointments