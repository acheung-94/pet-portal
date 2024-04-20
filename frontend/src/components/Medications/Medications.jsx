import '../Medications/Medications.css'
import { dateProximityIcon } from '../../utils/constants';
const Medications = ({reminders, setModalState, setCurrentReminder}) => {

    const medicationsList = reminders.filter(reminder => reminder.type === 'medication');

    return (
        <>
            {medicationsList &&
                Object.values(medicationsList).map((med, idx) => (
                    <div key={idx} className='medication-info-container'
                            onClick={()=> {
                                setCurrentReminder(med)
                                setModalState('edit')
                                }}>
                        <div className='medication-header'>
                            <div className='medication-title'>
                                <p>{med.title}</p>
                            </div>
                            <div className='medication-date'>
                                <p>Due: {new Date(med.dueDate).toLocaleDateString('en-US')}</p>
                                <img src={dateProximityIcon(med.dueDate)}
                                    className='proximity-icon'/>
                            </div>
                        </div>
                        <div className='reminder-divider'></div>
                        <div className='medication-content'>
                            <p>{med.description}</p>
                        </div>
                    </div>
                ))
            }
            { !medicationsList.length && (
                <div className="empty-reminders">
                    Click the <span>+</span> icon to add a reminder!
                </div>
            )}
            
        </>
    )
}

export default Medications