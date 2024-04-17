import { useSelector } from 'react-redux'
import './PetProfile.css'
import { Link, useParams } from 'react-router-dom'
import { currentPet } from '../../store/petReducer'
import { useEffect } from 'react'
const PetProfile = () => {
    const { petId } = useParams()
    const pet = useSelector(currentPet(petId))
    const petAttributes = Object.entries(pet)
    
    const renderAttributes = () => {
        return petAttributes.map( ([key, val], idx) => {
            if ( key !== '_id' && key !== '__v') {
                return (
                    <div key={idx} className="pet-attribute">
                        <h3>{key.toUpperCase()}</h3>
                        <p>{val}</p>
                    </div>
                )
            }
        })
    }

    useEffect( () => {
        console.log(pet)
        console.log(Object.entries(pet))
    }, [pet])


    return(
        <div className='pet-dashboard-container'>
            <div className="pet-dashboard">
                <Link to={'/dashboard'} className='back-link'> ← Back to your dashboard </Link>
                <h1 className='pet-dash-header'> Pet Dashboard </h1>
                <span className='pet-dash-sep'></span>
                <div className="pet-metrics-container">
                    <div className='pet-reminder-module'> 
                        <div className='pet-reminder-header'>
                            <h3>Reminders</h3>
                            <button className='pet-dash-buttons'> + </button>
                        </div>
                        <div> Module w/ overflow </div>
                    </div>
                    <div className="preventatives-module">
                        <div className="vaccines">
                            <div className='pet-vaccines-header'>
                                <h3>Vaccines</h3>
                                <button className='pet-dash-buttons'> + </button>
                            </div>
                            <div>Module w/ overflow</div>
                        </div>
                        <div className="medications">
                            <div className='medications-header'>
                                <h3>Medications</h3>
                                <button className='pet-dash-buttons'> + </button>
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
                    {
                        renderAttributes()
                    }
                </div>
            </div>
        </div>
    )
}

export default PetProfile