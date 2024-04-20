import '../Vaccines/Vaccines.css'

const Vaccines = ({reminders, setModalState, setCurrentReminder}) => {

    const vaccinesList = reminders.filter(reminder => reminder.type === 'vaccination');

    return (
        <>
            {vaccinesList &&
                Object.values(vaccinesList).map((vac, idx) => (
                    <div key={idx} className='vaccine-info-container'
                        onClick={()=>{
                            setCurrentReminder(vac)
                            setModalState('edit')
                            }}>
                        <div className='vaccine-header'>
                            <div className='vaccine-desc'>
                                <p>{vac.title}</p>
                            </div>
                            <div className='vaccine-date'>
                                <p>Due: {new Date(vac.dueDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Vaccines