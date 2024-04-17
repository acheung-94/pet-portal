import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/sessionReducer'
import './PetGrid.css'
import { useEffect } from 'react'
import { fetchPets } from '../../store/petReducer'
import ImgPlaceholder from '../../assets/striped-cat.jpg'

const PetGrid = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const currentPets = useSelector(state => state.pets)

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchPets())
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
                        {/* add new pet form */}
                    </div>
                </div>
                <div className='pet-grid-divider'>
                    
                </div>
                <div className='pet-grid-index'>
                    {Object.values(currentPets).map(pet => (
                        <div key={pet._id} className='pet-item'>
                            <div className='pet-img'>
                                {/* Link to Pet Show */}
                                <img src={ImgPlaceholder}/>
                            </div>
                            <div className='pet-name'>
                                <p>{pet.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PetGrid