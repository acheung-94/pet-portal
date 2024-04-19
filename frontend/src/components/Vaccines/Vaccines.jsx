import { useDispatch, useSelector } from 'react-redux'
import '../Vaccines/Vaccines.css'
import { useParams } from 'react-router-dom'
import { fetchPets } from '../../store/petReducer'
import { fetchPetReminders } from '../../store/reminderReducer'
import { useEffect } from 'react'

const Vaccines = () => {
    const dispatch = useDispatch()
    const { petId } = useParams()
    const reminders = useSelector(state => state.reminders)

    useEffect( () => {
        dispatch(fetchPets())
        dispatch(fetchPetReminders(petId))
    }, [petId, dispatch])

    const vaccinesList = Object.values(reminders).filter(reminder => reminder.type === 'vaccination');

    return (
        <>
            {vaccinesList &&
                Object.values(vaccinesList).map((vac, idx) => (
                    <div key={idx} className='vaccine-info-container'>
                        <div className='vaccine-header'>
                            <div className='vaccine-desc'>
                                <p>{vac.title}</p>
                            </div>
                            <div className='vaccine-date'>
                                <p>{new Date(vac.dueDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Vaccines