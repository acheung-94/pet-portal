import { useSelector } from 'react-redux'
import './PetProfile.css'
import { Link, useParams } from 'react-router-dom'

const PetProfile = () => {
    const { petId } = useParams()
    const pet = useSelector(selectPet(parseInt(petId)))
    const petAttributes = Object.entries(pet)

    const renderAttributes = () => {
        return petAttributes.map( ([key, val], idx) => (
            <div key={idx} className="pet-attribute">
                <h3>{key}</h3>
                <p>{val}</p>
            </div>
        ))
    }

    return(
        <div>
            <div className="pet-dashboard">
                <Link to={'/dashboard'}> Back to your dashboard </Link>
                <h1> pet Dashboard </h1>
                <span className='pet-dash-sep'></span>
                <div className="pet-metrics-container">
                    <div className='pet-reminder-module'> 
                        <div className='pet-reminder-header'>
                            <h3>Reminders</h3>
                            <button> + </button>
                        </div>
                        <div> Module </div>
                    </div>
                    <div className="preventatives-module">
                        <div className="vaccines">
                            <div className='pet-vaccines-header'>
                                <h3>Vaccines</h3>
                                <button> + </button>
                            </div>
                            <div>Module</div>
                        </div>
                        <div className="medications">
                            <div className='medications-header'>
                                <h3>Medications</h3>
                                <button> + </button>
                            </div>
                            <div>Module</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="pet-signalment">
                <div className='profile-pic-border'>
                    <img src="" alt="" />
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