import '../Medications/Medications.css'

const Medications = () => {
    // const medicationsList = // placeholder

    return (
        <>
            {/* {medicationsList &&
                Object.values(medicationsList).map((apt, idx) => (
                    <div key={idx} className='medication-info-container'>
                        <div className='medication-desc'>

                        </div>
                        <div className='medication-header'>
                            <p>{apt.dueDate}</p>
                        </div>
                    </div>
                ))
            } */}

            <div className='medication-info-container'>
                <div className='medication-desc'>
                    <p>Test medication description</p>
                </div>
                <div className='medication-header'>
                    <p>04/17/2024</p>
                </div>
            </div>
        </>
    )
}

export default Medications