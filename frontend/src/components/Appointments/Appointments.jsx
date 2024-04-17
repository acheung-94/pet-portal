import '../Appointments/Appointments.css'

const Appointments = () => {
    // const appointmentsList = // placeholder

    return (
        <>
            {/* {appointmentsList &&
                Object.values(appointmentsList).map((apt, idx) => (
                    <div key={idx} className='appointment-info-container'>
                        <div className='appointment-header'>
                            <p>{apt.dueDate}</p>
                        </div>
                        <div className='appointment-divider'>

                        </div>
                        <div className='appointment-content'>
                            <div className='appointment-desc'>

                            </div>
                            <div className='appointment-loc'>

                            </div>
                        </div>
                    </div>
                ))
            } */}
            <div className='appointment-info-container'>
                <div className='appointment-header'>
                    <p>04/18/2024</p>
                </div>
                <div className='appointment-divider'>

                </div>
                <div className='appointment-content'>
                    <div className='appointment-desc'>
                        <p>Test appointment description</p>
                    </div>
                    <div className='appointment-loc'>
                        <p>Test appointment location</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Appointments