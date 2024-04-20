import { useDispatch } from 'react-redux'
import './SessionAlert.css'
import { useNavigate } from 'react-router-dom'
import { setSessionAlert } from '../../store/errorsReducer'

const SessionAlert = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(setSessionAlert(false))
        navigate('/login')
    }
    return (
        <div className="session-alert-bg">
            <div className="session-alert">
                <h3>Oh no! Your session has expired. Click below to log in again.</h3>
                <button onClick={handleClick}>Go to Login</button>
            </div>
        </div>
    )
}

export default SessionAlert