import './EditPetFormModal.css'
const EditPetFormModal = () => {

    return(
        <div className="modal-background" onClick={() => setModalState(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-content-top'>
                    <button onClick={() => setModalState(null)}>
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
            </div>
        </div>
    
    )

}

export default EditPetFormModal