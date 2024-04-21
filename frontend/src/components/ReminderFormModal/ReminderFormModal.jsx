import './ReminderFormModal.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReminder, destroyReminder, updateReminder } from '../../store/reminderReducer';
import { K9_VAX, FEL_VAX, APPT_TYPES, MEDS } from '../../utils/constants';
import { useCallback } from 'react';

const ReminderFormModal = ({modalState, setModalState, pet, reminder={},setCurrentReminder}) => {
    const [type, setType] = useState(
        modalState === 'edit' ? reminder.type : '')

    const [title, setTitle] = useState(
        modalState === 'edit' ? reminder.title : '')
    const [due, setDue] = useState(
        modalState === 'edit' ? reminder.dueDate.slice(0,10) : '')
    const [performDate, setPerformDate] = useState(
        modalState === 'edit' && reminder.performDate ? reminder.performDate.slice(0,10) : '')
    const [description, setDescription] = useState(
        modalState === 'edit' ? reminder.description : '')
    const [location, setLocation] = useState(
        modalState === 'edit' ? reminder.location : '')
    const dispatch = useDispatch()

    const conditionalOptions = useCallback((type) => {
        switch (type) {
            case 'appointment':
                return APPT_TYPES;
            case 'vaccination':
                if (pet.species === 'cat') {
                    return FEL_VAX;
                } else {
                    return K9_VAX;
                }
            case 'medication':
                return MEDS;
            default:
                return [];
        }
    }, [pet.species]);

    const [titleOptions, setTitleOptions] = useState(
        modalState==='edit' ?  
        conditionalOptions(reminder.type) :
        []);

    useEffect(() => {
        if (modalState !== 'edit'){
            setType(modalState)
            setTitleOptions(conditionalOptions(modalState))
        }
    },[type, modalState, conditionalOptions])
    useEffect(() => {
        console.log("Reminder data changed")
    }, [dispatch, reminder])
    const handleTypeChange = (e) => {
        setType(e.target.value);
        
        const selectedValue = e.target.value.toLowerCase()

        switch (selectedValue) {
            case 'appointment':
                setTitleOptions(APPT_TYPES);
                break;
            case 'vaccination':
                setTitleOptions(
                    pet.species === 'cat' ? 
                    FEL_VAX :
                    K9_VAX
                )
                break;
            case 'medication':
                setTitleOptions(MEDS);
                break;
            default:
                setTitleOptions([]);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const reminderInfo = {
            ...reminder,
            type: type,
            title: title,
            dueDate: due,
            performDate: performDate, 
            description: description, 
            location: location,
            pet: pet._id
        }

        modalState === 'edit' ?
        dispatch(updateReminder(reminderInfo)) :
        dispatch(createReminder(reminderInfo))

        setModalState(null)
        setType('')
        setTitle('')
        setDue('')
        setPerformDate('')
        setDescription('')
        setLocation('')
    }
    
    const handleDelete = (e) => {
        e.preventDefault()
        console.log("You clicked the reminder id" ,reminder._id)
        dispatch(destroyReminder(reminder._id))
        setModalState(null)
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
                    <optgroup >
                        <option disabled value=""> Select Type </option>
                        <option id="appt" value="appointment">Appointment</option>
                        <option id="vaccine" value="vaccination">Vaccination</option>
                        <option id="medication" value="medication">Medication</option>

                    </optgroup>
                </select>
            </label>
            <label className="input-label">
                <div className='title-select-label'>
                    <span>Title<span className="required">* required</span></span>
                </div>
                <select
                    className="title-select"
                    // placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}>
                    <optgroup>
                        <option disabled value=""> {`Select ${modalState !== 'edit' && modalState}`} </option>
                        {titleOptions&& titleOptions.map((ele, idx) => (
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
                                        stroke: 'currentColor',
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

                                {modalState && (
                                    <div className='reminder-title'>
                                        {modalState === 'edit' ? 'Edit / Delete' : `Add ${(modalState.charAt(0).toUpperCase() + modalState.slice(1))}`} Reminder
                                    </div>
                                )}
                        </div>
                        <div className='modal-content-bottom-form-container'>
                            <form className='modal-content-bottom-form' onSubmit={handleSubmit}>
                                {reminderForm()}
                                <div className='reminder-button-container'>
                                    <button type="submit" className='add-new-reminder-button'>
                                        {modalState && (
                                        <div className={ modalState === 'edit'? 'reminder-button-edit' : 'reminder-button'}> 
                                            {modalState === 'edit' ? 
                                            "Confirm Changes" : 
                                            `Add ${(modalState.charAt(0).toUpperCase() + modalState.slice(1))} 
                                            Reminder`}
                                         </div>
                                        )}

                                    </button>
                                    {modalState === 'edit' &&
                                    <button type='button' className='add-new-reminder-button' onClick={handleDelete}>
                                        <div className='delete-reminder-button'>Delete</div>
                                    </button>}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default ReminderFormModal