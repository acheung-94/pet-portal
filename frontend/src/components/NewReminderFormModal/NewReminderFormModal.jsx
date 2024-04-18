import './NewReminderFormModal.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReminder } from '../../store/reminderReducer';

const NewReminderFormModal = ({modalState, setModalState}) => {
    const [type, setType] = useState('')
    const [titleOptions, setTitleOptions] = useState([]);

    const [title, setTitle] = useState('')
    const [due, setDue] = useState(null)
    const [performDate, setPerformDate] = useState(null)
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const dispatch = useDispatch()


    const handleTypeChange = async (e) => {
        setType(e.target.value);
    
        switch (e.target.value) {
            case 'appointment':
                setTitleOptions(['appt1', 'appt2', 'appt3']);
                break;
            case 'vaccination':
                setTitleOptions(['vax1', 'vax2', 'vax3']);
                break;
            case 'medication':
                setTitleOptions(['med1', 'med2', 'med3']);
                break;
            default:
                setTitleOptions([]);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const reminderInfo = {
            type: type,
            title: title,
            dueDate: due,
            performDate: performDate, 
            description: description, 
            location: location
        }

        dispatch(createReminder(reminderInfo))

        setModalState(null)
        setType('')
        setTitle('')
        setDue(null)
        setPerformDate(null)
        setDescription('')
        setLocation('')
    }

    const reminderForm = () => (
        <>
            <label className="input-label">
                <div className='type-select-label'>
                    <span>Type<span className="required">* required</span></span>
                </div>
                <select
                    className="type-select"
                    placeholder='Type'
                    value={type}
                    onChange={handleTypeChange}>
                    <optgroup>
                        <option disabled value="">  </option>
                        <option id="appt">appointment</option>
                        <option id="vaccine">vaccination</option>
                        <option id="medication">medication</option>

                    </optgroup>
                </select>
            </label>
            <label className="input-label">
                <div className='title-select-label'>
                    <span>Title<span className="required">* required</span></span>
                </div>
                <select
                    className="title-select"
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}>
                    <optgroup>
                        <option disabled value="">  </option>
                        {titleOptions.map((ele, idx) => (
                            <option key={idx} value={ele}>{ele}</option>
                        ))}
                    </optgroup>
                </select>
            </label>
            <label className="input-label">
                <div className='duedate-input-label'>
                    <span>Due Date<span className="required">* required</span></span>
                </div>
                <input placeholder='Due Date' 
                    type='date' value={due} onChange={e => setDue(e.target.value)} />
            </label>
            <label className="input-label">
                <div className='perform-date-input-label'>
                    <span>Perform Date</span>
                </div>
                <input placeholder='Perform Date' 
                    type='date' value={performDate} onChange={e => setPerformDate(e.target.value)} />
            </label>
            <label className='input-label'>
                <div className='description-input-label'>
                    <span>Description</span>
                </div>
                <textarea 
                    className="description-input" 
                    type="textarea" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                    cols="36"/>
            
            </label>
            <label className="input-label">
                <div className='location-input-label'>
                    <span>Location</span>
                </div>
                <input placeholder='Location' 
                    type='text' value={location} onChange={e => setLocation(e.target.value)} />
            </label>
        </>
    )

    return (
        <>
        <div className="modal-background" onClick={_ => setModalState(null)}>
                <div className={`modal-content-${modalState}`} onClick={e => e.stopPropagation()}>
                    <div className='reminder-modal-content-top'>
                        <button onClick={_ => setModalState(null)}>
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
                    <div className='modal-content-bottom'>
                        <div className='modal-content-bottom-title'>
                                {modalState === 'reminder' && <div className='reminder-title'>Add reminder</div>}
                                {modalState === 'vaccine' && <div className='reminder-title'>Add Vaccination Reminder</div>}
                                {modalState === 'medication' && <div className='reminder-title'>Add Medication Reminder</div>}
                        </div>
                        <div className='modal-content-bottom-form-container'>
                            <form className='modal-content-bottom-form' onSubmit={handleSubmit}>
                                {reminderForm()}
                                <div className='reminder-button-container'>
                                    <button type="submit" className='add-new-reminder-button'>
                                        {modalState === 'reminder' && <div className='reminder-button'>Add reminder</div>}
                                        {modalState === 'vaccine' && <div className='reminder-button'>Add Vaccination Reminder</div>}
                                        {modalState === 'medication' && <div className='reminder-button'>Add Medication Reminder</div>}
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

export default NewReminderFormModal