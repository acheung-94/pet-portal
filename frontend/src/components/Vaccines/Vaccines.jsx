import { useDispatch} from 'react-redux'
import '../Vaccines/Vaccines.css'

const Vaccines = ({reminders}) => {
    const dispatch = useDispatch()

    const vaccinesList = reminders.filter(reminder => reminder.type === 'vaccination');

    return (
        <>
            {vaccinesList &&
                Object.values(vaccinesList).map((vac, idx) => (
                    <div key={idx} className='vaccine-info-container'>
                        <div className='vaccine-header'>
                            <div className='vaccine-desc'>
                                <p>{vac.title}</p>
                            </div>
                            <div className='vaccine-date'>
                                <p>{new Date(vac.dueDate).toLocaleDateString('en-US')}</p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Vaccines