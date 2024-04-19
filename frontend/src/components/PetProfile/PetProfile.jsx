import { useDispatch, useSelector } from 'react-redux'
import './PetProfile.css'
import { Link, useParams } from 'react-router-dom'
import { currentPet, fetchPets } from '../../store/petReducer'
import { useEffect } from 'react'
import { fetchPetReminders } from '../../store/reminderReducer'
import { useState } from 'react'
import NewReminderFormModal from '../NewReminderFormModal/NewReminderFormModal'
import Navbar from '../Navbar/Navbar'


const PetProfile = () => {
    const { petId } = useParams()
    const pet = useSelector(currentPet(petId))
    const dispatch = useDispatch()
    const [modalState, setModalState] = useState(null)

    const calculateAge = (dateString) => {
        const birthday = new Date(dateString)
        const today = new Date()

        let years = today.getFullYear() - birthday.getFullYear()
        let months = today.getMonth() - birthday.getMonth()
        let days = today.getDate() - birthday.getDate()

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            if (months < 0) {
                months += 12;
            }
            if (days < 0) {
                const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
                days += lastMonth.getDate();
            }
        }

        if (years < 1) {
            if(months < 4){
                let weeks = Math.floor(days / 7)
                //let daysDiff = days % 7
                if (weeks > 1) {
                    return (`${weeks} weeks & ${days} days`)
                }else{
                    return (`${days} ${days === 1 ? "day" : "days"}`)
                }

            }else{
                return (`${months} months`)
            }
        }else{
            return (`${years} ${years === 1 ? "year" : "years"} & ${months} months`)
        }
    }

    const renderAttributes = () => {
        const petAttributes = Object.entries(pet)
        return petAttributes.map( ([key, val], idx) => {
            if ( key !== '_id' && key !== '__v' && key !== 'owner') {
                return (
                    <div key={idx} className="pet-attribute">
                        <h3>{ (key === 'dob') ? "Age" : key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</h3>
                        <p>{ (key === 'dob') ? calculateAge(val): val}</p>
                    </div>
                )
            }
        })
    }

    useEffect( () => {
        dispatch(fetchPets())
        dispatch(fetchPetReminders(petId))
    }, [petId, dispatch])


    if (pet) {

        return(
            <div className='dash-page-container'>
                <Navbar/>
                <div className='pet-dashboard-container'>
                    <div className="pet-dashboard">
                        <Link to={'/dashboard'} className='back-link'> ← Back to your dashboard </Link>
                        
                        <div className='pet-dash-highlight'><h1 className='pet-dash-header'> Pet Dashboard </h1></div>
                        <div className="pet-metrics-container">
                            <div className='pet-reminder-module'> 
                                <div className='pet-reminder-header'>
                                    <h3>Reminders</h3>
                                    <button className='pet-dash-buttons' onClick={() => setModalState('appointment')}> + </button>
                                </div>
                                <div> Module w/ overflow </div>
                            </div>
                            <div className="preventatives-module">
                                <div className="vaccines">
                                    <div className='pet-vaccines-header'>
                                        <h3>Vaccines</h3>
                                        <button className='pet-dash-buttons' onClick={() => setModalState('vaccination')}> + </button>
                                    </div>
                                    <div>Module w/ overflow</div>
                                </div>
                                <div className="medications">
                                    <div className='medications-header'>
                                        <h3>Medications</h3>
                                        <button className='pet-dash-buttons' onClick={() => setModalState('medication')}> + </button>
                                    </div>
                                    <div>Module w/ overflow</div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pet-signalment">
                        <div className='profile-pic-border'>
                            <img src={!pet.image && 
                            "https://pet-portal-assets.s3.us-west-1.amazonaws.com/pet-first-aid-svgrepo-com.svg"}
                            className='profile-pic'/>
                        </div>
                        <div className='pet-summary'>
                            <div className='name-splash-container'>
                                <div className="name-border">
                                    <h3>{(pet.name.charAt(0).toUpperCase() + pet.name.slice(1).toLowerCase())}</h3>
                                </div>
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
                            {pet.weight && (
                                <div className="pet-attribute">
                                    <h3>Weight: </h3>
                                    <p>{pet.weight}</p>
                                    <span className='decoration'></span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {modalState && <NewReminderFormModal 
                                modalState={modalState} 
                                setModalState={setModalState} 
                                pet={pet}
                                reminder={null}/>}
                                {/* replace with actual reminder when integrating */}

            </div>
        )
    }
}

export default PetProfile