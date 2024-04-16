import { useState } from 'react'
import './NewPetFormModal.css'

const NewPetForm = ({modalState, setModalState}) => {
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [sex, setSex] = useState('')
    const [species, setSpecies] = useState('')
    const [color, setColor] = useState('')
    const [breed, setBreed] = useState('')
    const [microchipNum, setMicrochipNum] = useState(0)
    const [insurancePolicyId, setInsurancePolicyId] = useState(0)
    const [weight, setWeight] = useState(0.0)

    const formContent = () => (
         <>
            <label className="input-label">
                <div className='name-input-label'>
                    Name
                </div>
                <input placeholder='Name' 
                    type='text' value={name} onChange={e => setName(e.target.value)} />
            </label>
            
            <label className="input-label">
                <div className='dob-input-label'>
                    Date of birth
                </div>
                <input placeholder='date of birth' 
                    type='date' value={dob} onChange={e => setDob(e.target.value)} />
            </label>

            <label className="input-label">
                <div className='sex-select-label'>
                    Sex
                </div>
                <select
                    className="sex-select"
                    placeholder='Sex'
                    value={sex}
                    onChange={e => setSex(e.target.value)}>
                    <optgroup>
                        <option disabled selected value="">  </option>
                        <option id="female">female</option>
                        <option id="male">male</option>
                        <option id="unknown">unknown</option>

                    </optgroup>
                </select>
            </label>
            <label className="input-label">
                <div className='species-input-label'>
                    Species 
                </div>
                <input placeholder='species' 
                    type='text' value={species} onChange={e => setSpecies(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='color-input-label'>
                    Color 
                </div>
                <input placeholder='color' 
                    type='text' value={color} onChange={e => setColor(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='breed-input-label'>
                    Breed 
                </div>
                <input placeholder='breed' 
                    type='text' value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='microchipNum-input-label'>
                    Microchip Number 
                </div>
                <input placeholder='microchipNum' 
                    type='text' value={microchipNum} onChange={e => setMicrochipNum(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='insurance-policy-input-label'>
                    Insurance Policy Id 
                </div>
                <input placeholder='insurance policy id' 
                    type='text' value={insurancePolicyId} onChange={e => setInsurancePolicyId(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='weight-input-label'>
                    Weight 
                </div>
                <input placeholder='weight' 
                    type='text' value={weight} onChange={e => setWeight(e.target.value)} />
            </label>
         </>

    )
    return(
        <>
            <div className="modal-background" onClick={e => setModalState(null)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className='modal-content-top'>
                        <button onClick={e => setModalState(null)}>
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
                            <h2>Add New Pet</h2>
                        </div>
                        <div className='modal-content-center-form'>
                            <form className='add-new-pet-form'>
                                {formContent()}
                                <div className='add-new-pet-button'>
                                    <button type="submit">Add New Pet</button>
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