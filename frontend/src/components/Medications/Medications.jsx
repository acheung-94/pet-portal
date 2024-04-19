import { useDispatch, useSelector } from 'react-redux'
import '../Medications/Medications.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchPets } from '../../store/petReducer'
import { fetchPetReminders } from '../../store/reminderReducer'

const Medications = () => {
    const dispatch = useDispatch()
    const { petId } = useParams()
    const reminders = useSelector(state => state.reminders)

    useEffect( () => {
        dispatch(fetchPets())
        dispatch(fetchPetReminders(petId))
    }, [petId, dispatch])

    const medicationsList = Object.values(reminders).filter(reminder => reminder.type === 'medication');

    return (
        <>
            {medicationsList &&
                Object.values(medicationsList).map((med, idx) => (
                    <div key={idx} className='medication-info-container'>
                        <div className='medication-header'>
                            <div className='medication-title'>
                                <p>{med.title}</p>
                            </div>
                            <div className='medication-date'>
                                <p>{new Date(med.dueDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                        <div className='reminder-divider'></div>
                        <div className='medication-content'>
                            <p>{med.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Medications