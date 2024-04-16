import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/sessionReducer'
import './PetGrid.css'

const PetGrid = () => {
    const currentUser = useSelector(selectCurrentUser)
    const currentPets = useSelector(state => state.pets) // placeholder

    return (
        <>
            <div className='pet-grid-container'>
                <div className='pet-grid-header-container'>
                    <div className='pet-grid-header-text'>
                        <h1>Your Pets</h1>
                    </div>
                    <div className='get-grid-header-form'>
                        {/* add new pet form */}
                    </div>
                </div>
                <div className='pet-grid-divider'>
                    
                </div>
                <div className='pet-grid-index'>
                    {currentPets.map(pet => (
                        <div key={pet.id} className='pet-item'>
                            <div className='pet-name'>
                                <span>{pet.name}</span>
                            </div>
                            <div className='pet-img'>
                                {/* pet's image */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PetGrid