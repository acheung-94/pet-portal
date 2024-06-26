import { useDispatch } from 'react-redux'
import './SessionAlert.css'
import { useNavigate } from 'react-router-dom'
import { setSessionAlert } from '../../store/errorsReducer'
import { logoutUser } from '../../store/sessionReducer'

const SessionAlert = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(setSessionAlert(false))
        navigate('/login')
    }

    const endSession = () => {
        dispatch(logoutUser())
        dispatch(setSessionAlert(false))
        navigate('/')
    }
    return (
        <div className="session-alert-bg">
            <div className="session-alert">
                <h3>Oh no! Your session has expired. </h3>
                <h3>Click below to log in again.</h3>
                <button onClick={handleClick}>Go to Login</button>
                <button onClick={endSession}>Log out</button>
            </div>
        </div>
    )
}

export default SessionAlert