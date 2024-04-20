import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/sessionReducer'
import { useEffect, useState } from 'react'
import { fetchPets } from '../../store/petReducer'
import NewPetFormModal from '../NewPetFormModal/NewPetFormModal'
import './PetGrid.css'
import { Link } from 'react-router-dom'
import ClinicModal from '../ClinicModal/ClinicModal'

const PetGrid = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const currentPets = useSelector(state => state.pets)
    const [modalState, setModalState] = useState(null)
    const [clinicModalState, setClinicModalState] = useState(null)


    useEffect(() => {
        if (currentUser) {
            dispatch(fetchPets(currentUser._id))
        }
    }, [currentUser, currentPets.length, dispatch])

    return (
        <>
            <div className='pet-grid-container'>
                <div className='pet-grid-header-container'>
                    <div className='pet-grid-header-text'>
                        <h1>Your Pets</h1>
                    </div>
                    <div className='get-grid-header-form'>
                        <button className='grid-add-pet-button' onClick={() => setModalState('add')}>Add pet</button>
                    </div>
                </div>
                <div className='pet-grid-divider'>
                    
                </div>
                <div className='pet-grid-index'>
                    {currentPets &&
                        Object.values(currentPets).map((pet, idx) => (
                            <div key={idx} className='pet-item'>
                              <div className='pet-img'>
                                  <Link to={`/dashboard/${pet._id}`}>
                                    <img className={pet._id} src={pet.imageUrl}/>
                                  </Link>
                              </div>
                              <div className='pet-name'>
                                  <p>{pet.name}</p>
                              </div>
                            </div>
                        ))
                    }
                    {!currentPets && <div>Loading...</div>}
                </div>
                <div><button onClick={() => setClinicModalState('clinic')}>Test Button</button></div>
            </div>
            {modalState && <NewPetFormModal modalState={modalState} setModalState={setModalState}/>}
            {clinicModalState && <ClinicModal clinicModalState={clinicModalState} setClinicModalState={setClinicModalState}/>}
        </>
    )
}

export default PetGrid