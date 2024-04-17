import '../Vaccines/Vaccines.css'

const Vaccines = () => {
    // const vaccinesList = // placeholder

    return (
        <>
            {/* {vaccinesList &&
                Object.values(vaccinesList).map((apt, idx) => (
                    <div key={idx} className='vaccine-info-container'>
                        <div className='vaccine-desc'>

                        </div>
                        <div className='vaccine-header'>
                            <p>{apt.dueDate}</p>
                        </div>
                    </div>
                ))
            } */}
            <div className='vaccine-info-container'>
                <div className='vaccine-desc'>
                    <p>Test vaccine description</p>
                </div>
                <div className='vaccine-header'>
                    <p>04/19/2024</p>
                </div>
            </div>

        </>
    )
}

export default Vaccines