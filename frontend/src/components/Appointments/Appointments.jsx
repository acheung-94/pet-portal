import '../Appointments/Appointments.css'

const Appointments = ({reminders, setModalState, setCurrentReminder}) => {

    const appointmentsList = reminders.filter(reminder => reminder.type === 'appointment');

    return (
        <>
            {appointmentsList &&
               appointmentsList.map((apt, idx) => (
                    <div key={idx} className='appointment-info-container' 
                            onClick={()=> {
                                setCurrentReminder(apt)
                                setModalState('edit')
                                }}>
                        <div className='appointment-header'>
                            <div className='appointment-title'>
                                <p>{apt.title}</p>
                            </div>
                            <div className='appointment-date'>
                                <p>{new Date(apt.dueDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                        <div className='reminder-divider'></div>
                        <div className='appointment-content'>
                            <div className='appointment-desc'>
                                <p>{apt.description}</p>
                            </div>
                            <div className='appointment-loc'>
                                <p>{apt.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Appointments