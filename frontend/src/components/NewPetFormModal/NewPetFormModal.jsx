import { useEffect, useState } from 'react'
import './NewPetFormModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { createPet, updatePet } from '../../store/petReducer'
import { useLocation } from 'react-router'
const NewPetForm = ({modalState, setModalState, editModalState, setEditModalState, initialPetData}) => {
    const [name, setName] = useState(initialPetData ? initialPetData.name : '')
    const initialDob = initialPetData ? new Date(initialPetData.dob).toISOString().split('T')[0] : '';
    const [dob, setDob] = useState(initialDob)
    const [sex, setSex] = useState(initialPetData ? initialPetData.sex : '')
    const [species, setSpecies] = useState(initialPetData ? initialPetData.species : '')
    const [color, setColor] = useState(initialPetData ? initialPetData.color : '')
    const [breed, setBreed] = useState(initialPetData ? initialPetData.breed : '')
    const [microchipNum, setMicrochipNum] = useState(initialPetData ? initialPetData.microchipNum : null )
    const [insurancePolicyId, setInsurancePolicyId] = useState(initialPetData ? initialPetData.insurancePolicyId : null)
    const [weight, setWeight] = useState(initialPetData ? initialPetData.weight : null)
    const dispatch = useDispatch();
    const currentPets = useSelector(state => state.pets) // placeholder
    const location = useLocation()
    const {pathname} = location


    useEffect(() => {
    }, [currentPets])

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const petInfo = {
            _id: initialPetData._id,
            name: name,
            dob: dob,
            sex: sex,
            species: species, 
            color: color,
            breed: breed, 
            microchipNum: microchipNum, 
            insurancePolicyId: insurancePolicyId, 
            weight: weight
        }

        dispatch(updatePet(petInfo))
        setEditModalState(null)
    }
    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const petInfo = {
            name: name,
            dob: dob,
            sex: sex,
            species: species, 
            color: color,
            breed: breed, 
            microchipNum: microchipNum, 
            insurancePolicyId: insurancePolicyId, 
            weight: weight
        }

        dispatch(createPet(petInfo))
        setModalState(null)
        setName('')
        setDob('')
        setSex('')
        setSpecies('')
        setColor('')
        setBreed('')
        setMicrochipNum(null)
        setInsurancePolicyId(null)
        setWeight(null)
    }

    const formContent = () => (
         <>
            <label className="input-label">
                <div className='name-input-label'>
                    <span>Name<span className="required">* required</span></span>
                </div>
                <input placeholder='Name' 
                    type='text' value={name} onChange={e => setName(e.target.value)} />
            </label>
            
            <label className="input-label">
                <div className='dob-input-label'>
                    <span>Date of Birth<span className="required">* required</span></span>
                </div>
                <input placeholder='Date of birth' 
                    type='date' value={dob} onChange={e => setDob(e.target.value)} />
            </label>

            <label className="input-label">
                <div className='sex-select-label'>
                    <span>Sex<span className="required">* required</span></span>
                </div>
                <select
                    className="sex-select"
                    placeholder='Sex'
                    value={sex}
                    onChange={e => setSex(e.target.value)}>
                    <optgroup>  
                        <option disabled value="">  </option>
                        <option id="female">female</option>
                        <option id="male">male</option>
                        <option id="unknown">unknown</option>

                    </optgroup>
                </select>
            </label>
            <label className="input-label">
                <div className='species-input-label'>
                    <span>Species<span className="required">* required</span></span>
                </div>
                <input placeholder='Species' 
                    type='text' value={species} onChange={e => setSpecies(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='color-input-label'>
                    <span>Color<span className="required">* required</span></span> 
                </div>
                <input placeholder='Color' 
                    type='text' value={color} onChange={e => setColor(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='breed-input-label'>
                    <span>Breed</span>
                </div>
                <input placeholder='Breed' 
                    type='text' value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='microchipNum-input-label'>
                    <span>Microchip Number</span>
                </div>
                <input placeholder='Microchip number' 
                    type='text' value={microchipNum} onChange={e => setMicrochipNum(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='insurance-policy-input-label'>
                    <span>Insurance Policy Id</span>
                </div>
                <input placeholder='Insurance policy id' 
                    type='text' value={insurancePolicyId} onChange={e => setInsurancePolicyId(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='weight-input-label'>
                    <span>Weight</span>
                </div>
                <input placeholder='Weight' 
                    type='text' value={weight} onChange={e => setWeight(e.target.value)} />
            </label>
         </>

    )
    const handleBackgroundClick = () => {
        if(pathname === '/dashboard') {
            setModalState(null)
        } else {
            setEditModalState(null)
        }
    }
    return(
        <>
            <div className="modal-background" onClick={handleBackgroundClick}>
                <div className={`modal-content-${modalState ? `${modalState}` : ''}${editModalState ? `${editModalState}` : ''}`} onClick={e => e.stopPropagation()}>
                    <div className={`modal-content-top-${modalState ? `${modalState}` : ''}${editModalState ? `${editModalState}` : ''}`}>
                        <button className='pet-form-button' onClick={handleBackgroundClick}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" 
                                    role="presentation" focusable="false" 
                                    style={{
                                        display: 'block',
                                        fill: 'none',
                                        height: '16px',
                                        width: '16px',
                                        stroke: 'currentcolor',
                                        strokeWidth: '3',
                                        overflow: 'visible'
                                    }}>
                                    <path d="m6 6 20 20M26 6 6 26"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className='modal-content-center'>
                        <div className='modal-content-center-title'>
                            {modalState && <h2>Add New Pet</h2>}
                            {editModalState && <h2>Edit Pet</h2>}
                        </div>
                        <div className='modal-content-center-form'>
                            <form className={`${modalState ? `${modalState}` : ''}${editModalState ? `${editModalState}` : ''}-new-pet-form`} onSubmit={pathname === '/dashboard' ? handleCreateSubmit : handleEditSubmit}>
                                {formContent()}
                                <div className={`${modalState ? `${modalState}` : ''}${editModalState ? `${editModalState}` : ''}-new-pet-button`}>
                                    <button type="submit">
                                        {modalState && <h2>Add New Pet</h2>}
                                        {editModalState && <h2>Edit Pet</h2>}
                                    </button>
                                </div>
                            </form> 
                        </div>
                    </div>                      
                </div>
            </div>

        </>
    )
}

export default NewPetForm