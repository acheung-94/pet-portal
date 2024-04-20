import '../Appointments/Appointments.css'

const Appointments = ({reminders, setModalState, setCurrentReminder}) => {

    const appointmentsList = reminders.filter(reminder => reminder.type === 'appointment');
    
    const formatDateTime = (dateString) => {
        const aptDate = new Date(dateString)
        const date = aptDate.toLocaleDateString('en-US')
        const time = aptDate.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        })

        return `${date} - ${time}`
    }
    
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
                                <p>{formatDateTime(apt.dueDate)}
                                </p>
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