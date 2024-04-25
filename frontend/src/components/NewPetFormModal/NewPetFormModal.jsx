import { useEffect, useState } from 'react'
import './NewPetFormModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { createPet, updatePet } from '../../store/petReducer'
import { useLocation } from 'react-router'
import { SPECIES } from '../../utils/constants'
const NewPetForm = ({modalState, setModalState, editModalState, setEditModalState, initialPetData, petId}) => {
    const [name, setName] = useState(initialPetData?.name ?? '')
    const initialDob = initialPetData ? new Date(initialPetData.dob).toISOString().split('T')[0] : '';
    const [dob, setDob] = useState(initialDob)
    const [sex, setSex] = useState(initialPetData?.sex ?? '')
    const [species, setSpecies] = useState(initialPetData?.species ?? '')
    const [color, setColor] = useState(initialPetData?.color ?? '')
    const [breed, setBreed] = useState(initialPetData?.breed ?? '')
    const [microchipNum, setMicrochipNum] = useState(initialPetData?.microchipNum ?? '' )
    const [insurancePolicyId, setInsurancePolicyId] = useState(initialPetData?.insurancePolicyId ?? '')
    const [weight, setWeight] = useState(initialPetData?.weight ?? '')
    const [photo, setPhoto] = useState(initialPetData ? initialPetData.photo : null)
    const [imageUpdated, setImageUpdated] = useState(false)
    const [filePreview, setFilePreview] = useState(initialPetData?.imageUrl ?? '')
    const dispatch = useDispatch();
    const currentPets = useSelector(state => state.pets) // placeholder
    const location = useLocation()
    const {pathname} = location

    useEffect(() => {
    }, [currentPets])

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const petInfo = {
            _id: petId,
            name: name,
            dob: dob,
            sex: sex,
            species: species, 
            color: color,
            breed: breed, 
            microchipNum: microchipNum, 
            insurancePolicyId: insurancePolicyId, 
            weight: weight,
            imageUpdated: imageUpdated
        }
        
        if(photo) {
            data.append('image',photo)
            setImageUpdated(true)
        }
        for(const key in petInfo) {
            if(Object.hasOwn(petInfo, key)) {
                data.append(`${key}`, petInfo[key])
            }
        }
        dispatch(updatePet(data, petId))
        setEditModalState(null)
        setImageUpdated(false)
    }
    
    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
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


        for (const key in petInfo) {
            if (Object.prototype.hasOwnProperty.call(petInfo, key)) {
                data.append(key, petInfo[key]);
            }
        }

        // Append photo if it exists
        if (photo) {
            data.append('image', photo);
        }

        // if( /dashboard\/?$/.test(pathname)) {
        dispatch(createPet(data))
        setModalState(null)
        // }

        setName('')
        setDob('')
        setSex('')
        setSpecies('')
        setColor('')
        setBreed('')
        setMicrochipNum('')
        setInsurancePolicyId('')
        setWeight('')
        setPhoto(null)
        setFilePreview('')
    } 


    const handleFile = (e) => {
        const file = e.currentTarget.files[0]
        setPhoto(file);
        setFilePreview(URL.createObjectURL(file))
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
                <select className='species-select'
                        value="species"
                        onChange={e => setSpecies(e.target.value)}>
                    <optgroup>
                        <option disabled value="">Select Species</option>
                        {SPECIES.map( ( species, idx ) => (
                            <option key={idx} value={species.toLowerCase()}>{species}</option>
                        ))}
                    </optgroup>
                </select>
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

            <label className="input-label"> 
                <div className='photo-input-label'>
                    <span>{modalState === 'edit' ? 'Update Photo' : 'Please add photo of your pet !'}</span>
                </div>    
                <input id="photo" onChange={handleFile} type="file" />
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
                <div className={`${modalState ? `${modalState}` : ''}${editModalState ? `${editModalState}` : ''}-modal-content`} onClick={e => e.stopPropagation()}>
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
                        {filePreview && (<div className='file-preview'>
                            <img src={filePreview} />
                        </div>)}
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