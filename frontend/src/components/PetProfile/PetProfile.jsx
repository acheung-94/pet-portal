import { useDispatch, useSelector } from 'react-redux'
import './PetProfile.css'
import { Link, useParams } from 'react-router-dom'
import { currentPet, destroyPet, fetchPets } from '../../store/petReducer'
import { useEffect } from 'react'
import Appointments from '../Appointments/Appointments'
import Vaccines from '../Vaccines/Vaccines'
import Medications from '../Medications/Medications'
import { fetchPetReminders, selectReminders } from '../../store/reminderReducer'
import { useState } from 'react'
import NewPetFormModal from '../NewPetFormModal/NewPetFormModal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import ReminderFormModal from '../ReminderFormModal/ReminderFormModal'
import { selectCurrentUser } from '../../store/sessionReducer'


const PetProfile = () => {
    const { petId } = useParams()
    const pet = useSelector(currentPet(petId))
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    const [modalState, setModalState] = useState(null)
    const [editPetState, setEditPetState] = useState(null)
    const [currentReminder, setCurrentReminder] = useState(null)
    const reminders = useSelector(selectReminders)

    const calculateAge = (dateString) => {
        const birthday = new Date(dateString)
        const today = new Date()

        let years = today.getFullYear() - birthday.getFullYear()
        let months = today.getMonth() - birthday.getMonth()
        let days = today.getDate() - birthday.getDate()
    
        if (months < 0 || (months === 0 && days < 0)) {
            years--
            months += 12
        }
    
        if (days < 0) {
            months--
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
            days += lastMonth.getDate()
        }
    
        if (months < 0) {
            years--
            months += 12
        }
    
        if (years === 0) {
            const weeks = Math.floor(days / 7)
            const remainderDays = days % 7
            if (months === 0) {
                return `${weeks} week${weeks !== 1 ? 's' : ''} & ${remainderDays} day${remainderDays !== 1 ? 's' : ''}`
            } else {
                return `${months} month${months !== 1 ? 's' : ''} & ${days} day${days !== 1 ? 's' : ''}`
            }
        } else {
            return `${years} year${years !== 1 ? 's' : ''} & ${months} month${months !== 1 ? 's' : ''}`
        }
    }

    const properName = (string) => {
        return string.split(' ')
            .map(word => 
                word[0].toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ')
    }

    useEffect( () => {
        if (currentUser?._id){
            dispatch(fetchPets(currentUser._id))
        }
        if (petId) {
            dispatch(fetchPetReminders(petId))
        }
    }, [dispatch, currentUser, petId])

    if (pet) {

        return(
            <div className='dash-page-container'>
                <img className="bg-image" src='https://pet-portal-assets.s3.us-west-1.amazonaws.com/layered-waves-haikei+(1).svg' />

            <div className='pet-dashboard-container'>
                <div className="pet-dashboard">
                    <Link to={'/dashboard'} className='back-link'> ← Back to your pets </Link>
                    
                    <h1 className='pet-dash-header'><span className='pet-dash-highlight'></span>{`${pet.name}'s Profile`}</h1>
                    <div className="pet-metrics-container">
                        <div className='pet-reminder-module'> 
                            <div className='pet-reminder-header'>
                                <h3>Appointments</h3>
                                <button className='pet-dash-buttons' onClick={() => setModalState('appointment')}> + </button>
                            </div>
                            <div className='appointment-index-container'>
                                <Appointments reminders={reminders}
                                setModalState={setModalState}
                                setCurrentReminder={setCurrentReminder}/>
                            </div>
                        </div>
                            <div className="preventatives-module">
                                <div className="vaccines">
                                    <div className='pet-vaccines-header'>
                                        <h3>Vaccines</h3>
                                        <button className='pet-dash-buttons' onClick={() => setModalState('vaccination')}> + </button>
                                    </div>
                                    <div className='vaccinations-index-container'>
                                        <Vaccines reminders={reminders}
                                        setModalState={setModalState}
                                        setCurrentReminder={setCurrentReminder}/>
                                     </div>
                                </div>
                                <div className="medications">
                                    <div className='medications-header'>
                                        <h3>Medications</h3>
                                        <button className='pet-dash-buttons' onClick={() => setModalState('medication')}> + </button>
                                    </div>
                                    <div className='medications-index-container'>
                                        <Medications reminders={reminders} 
                                        setModalState={setModalState}
                                        setCurrentReminder={setCurrentReminder}/>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pet-signalment">
                        
                        <div className='profile-pic-border'>
                            <img src={pet.imageUrl}
                            className='profile-pic'/>
                        </div>
                        <div className='pet-summary'>
                            <div className='name-splash-container'>
                                <div className="name-border">
                                    <h3>{properName(pet.name)}</h3>
                                </div>
                            </div>
                            <div>
                                <Link to={'/dashboard'}>
                                    <button className='delete-pet-dash-buttons' onClick={() => dispatch(destroyPet(petId))}>
                                    <FontAwesomeIcon icon={faTrashCan}/>    
                                    </button>
                                </Link>
                            </div>
                            <div className="pet-attribute">
                                <h3>Age: </h3>
                                <p>{calculateAge(pet.dob)}</p>
                                <span className='decoration'></span>
                            </div>
                            <div className="pet-attribute">
                                <h3>Sex: </h3>
                                <p>{pet.sex}</p>
                                <span className='decoration'></span>
                            </div>
                            <div className="pet-attribute">
                                <h3>Species: </h3>
                                <p>{pet.species}</p>
                                <span className='decoration'></span>
                            </div>
                            <div className="pet-attribute">
                                <h3>Breed: </h3>
                                <p>{pet.breed}</p>
                                <span className='decoration'></span>
                            </div>
                            <div className="pet-attribute">
                                <h3>Color: </h3>
                                <p>{pet.color}</p>
                                <span className='decoration'></span>
                            </div>
                            {pet.insurancePolicyId && (
                                <div className="pet-attribute">
                                    <h3>Insurance ID: </h3>
                                    <p>{pet.insurancePolicyId}</p>
                                    <span className='decoration'></span>
                                </div>
                            )}
                            {pet.microchipNumber && (
                                <div className="pet-attribute">
                                    <h3>Microchip: </h3>
                                    <p>{pet.microchipNumber}</p>
                                    <span className='decoration'></span>
                                </div>
                            )}
                            {pet.weight && (
                                <div className="pet-attribute">
                                    <h3>Weight: </h3>
                                    <p>{pet.weight}</p>
                                    <span className='decoration'></span>
                                </div>
                            )}
                            <div>
                            <button className='edit-pet-dash-buttons' onClick={() => setEditPetState('edit')}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {editPetState && <NewPetFormModal editModalState={editPetState} setEditModalState={setEditPetState} initialPetData={pet} petId={petId}/>}
                {modalState && <ReminderFormModal 
                    modalState={modalState} 
                    setModalState={setModalState} 
                    pet={pet}
                    reminder={currentReminder}
                />}
            </div>
        )
    }
}

export default PetProfile