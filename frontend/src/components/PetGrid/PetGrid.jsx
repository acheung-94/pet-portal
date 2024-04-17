import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectCurrentUser } from '../../store/sessionReducer'
import NewPetFormModal from '../NewPetFormModal/NewPetFormModal'
import './PetGrid.css'

const PetGrid = () => {
    const currentUser = useSelector(selectCurrentUser)
    const currentPets = useSelector(state => state.pets) // placeholder
    const [modalState, setModalState] = useState(false)

    return (
        <>
            <div className='pet-grid-container'>
                <div className='pet-grid-header-container'>
                    <div className='pet-grid-header-text'>
                        <h1>Your Pets</h1>
                    </div>
                    <div className='get-grid-header-form'>
                        <button className='grid-add-pet-button' onClick={() => setModalState(true)}>Add pet</button>
                    </div>
                </div>
                <div className='pet-grid-divider'>
                    
                </div>
                <div className='pet-grid-index'>

                    {currentPets &&
                        Object.values(currentPets).map((pet, idx) => (
                            <div key={idx} className='pet-item'>
                                <div className='pet-name'>
                                    <span>{pet.name}</span>
                                </div>
                                <div className='pet-img'>
                                    {/* pet's image */}
                                </div>
                            </div>
                        ))
                    }
                    {!currentPets && <div>Loading...</div>}
                </div>
            </div>
            {modalState && <NewPetFormModal modalState={modalState} setModalState={setModalState}/>}

        </>
    )
}

export default PetGrid