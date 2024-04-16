import { useState } from 'react'
import './NewPetFormModal.css'

const NewPetForm = ({modalState, setModalState}) => {
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [sex, setSex] = useState('')
    const [species, setSpecies] = useState('')
    const [color, setColor] = useState('')
    const [breed, setBreed] = useState('')
    const [microchipNum, setMicrochipNum] = useState()
    const [insurancePolicyId, setInsurancePolicyId] = useState()
    const [weight, setWeight] = useState()

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
                <input placeholder='date of birth' 
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
                        <option disabled selected value="">  </option>
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
                <input placeholder='species' 
                    type='text' value={species} onChange={e => setSpecies(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='color-input-label'>
                    <span>Color<span className="required">* required</span></span> 
                </div>
                <input placeholder='color' 
                    type='text' value={color} onChange={e => setColor(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='breed-input-label'>
                    <span>Breed <span className="optional">* optional</span></span>
                </div>
                <input placeholder='breed' 
                    type='text' value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='microchipNum-input-label'>
                    <span>Microchip Number <span className="optional">* optional</span></span>
                </div>
                <input placeholder='microchipNum' 
                    type='text' value={microchipNum} onChange={e => setMicrochipNum(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='insurance-policy-input-label'>
                    <span>Insurance Policy Id <span className="optional">* optional</span></span>
                </div>
                <input placeholder='insurance policy id' 
                    type='text' value={insurancePolicyId} onChange={e => setInsurancePolicyId(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='weight-input-label'>
                    <span>Weight <span className="optional">* optional</span></span>
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