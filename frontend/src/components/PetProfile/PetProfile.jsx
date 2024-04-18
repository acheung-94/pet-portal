import { useDispatch, useSelector } from 'react-redux'
import './PetProfile.css'
import { Link, useParams } from 'react-router-dom'
import { currentPet, fetchPets } from '../../store/petReducer'
import { useEffect } from 'react'
import { fetchPetReminders } from '../../store/reminderReducer'
import { useState } from 'react'
import NewPetFormModal from '../NewPetFormModal/NewPetFormModal'
import NewReminderFormModal from '../NewReminderFormModal/NewReminderFormModal'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const PetProfile = () => {
    const { petId } = useParams()
    const pet = useSelector(currentPet(petId))
    const dispatch = useDispatch()
    const [modalState, setModalState] = useState(null)
    const [editModalState, setEditModalState] = useState(null)
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

    console.log("EDIT MODAL STATE", editModalState)
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
                                    <button className='pet-dash-buttons' onClick={() => setModalState('reminder')}> + </button>
                                </div>
                                <div> Module w/ overflow </div>
                            </div>
                            <div className="preventatives-module">
                                <div className="vaccines">
                                    <div className='pet-vaccines-header'>
                                        <h3>Vaccines</h3>
                                        <button className='pet-dash-buttons' onClick={() => setModalState('vaccine')}> + </button>
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
                        <div>
                            <button className='edit-pet-dash-buttons' onClick={() => setEditModalState('edit')}> + </button>
                        </div>
                        <div className='profile-pic-border'>
                            <img src={!pet.image && 
                            "https://pet-portal-assets.s3.us-west-1.amazonaws.com/pet-first-aid-svgrepo-com.svg"}
                            className='profile-pic'/>
                        </div>
                        <div className='pet-summary'>
                            {
                                renderAttributes()
                            }
                        </div>
                    </div>
                </div>
                {modalState && <NewReminderFormModal modalState={modalState} setModalState={setModalState} pet={pet}/>}
                {editModalState && <NewPetFormModal editModalState={editModalState} setEditModalState={setEditModalState}/>}
                <Footer/>
            </div>
        )
    }
}

export default PetProfile