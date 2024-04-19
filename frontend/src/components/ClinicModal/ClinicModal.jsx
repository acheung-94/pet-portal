import "./ClinicModal.css"

const ClinicModal = ({clinicModalState, setClinicModalState}) => {

    return(
        <div className="modal-background" onClick={_ => setClinicModalState(null)}>
            <div className={`modal-content-${clinicModalState}`} onClick={e => e.stopPropagation()}>
                <div className='clinic-modal-content-top'>
                    <button onClick={_ => setClinicModalState(null)}>
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
                <div className="clinic-modal-content-bottom">
                    <div className="clinic-content-container">
                        <div className="clinic-left">
                            <div className="clinic-search">
                                <input type="text" />
                                <button>Search Clinic</button>
                                
                            </div>
                        </div>
                        <div className="clinic-right">
                            <div>RIGHT</div>
                            <div>ALL CLINIC INFOs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicModal