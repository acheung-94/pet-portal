import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { logoutUser, refreshUser, selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import { selectSessionStatus, setSessionAlert } from '../../store/errorsReducer';


const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const sessionStatus = useSelector(selectSessionStatus)
    const dispatch = useDispatch();

    useEffect( () => {
        if (currentUser && currentUser.sessionExpiration){
            const checkTime = setInterval(()=>{
                const currentTime = Date.now() //ms
                const expirationTime = new Date(currentUser.sessionExpiration).getTime() //ms

                if (currentTime >= (expirationTime-5000) ){
                    dispatch(refreshUser())
                    clearInterval(checkTime)
                }   
            } , 500)

            return(() => {
                clearInterval(checkTime)
            } )
        }
    }, [currentUser, dispatch])
    useEffect( () => {
        if (currentUser && currentUser.sessionExpiration){
            const currentTime = Date.now()
            const expirationTime = new Date(currentUser.sessionExpiration).getTime()
            if (currentTime >= expirationTime){
                dispatch(setSessionAlert(true))
            }
        }
    })
    return(
        <div>
            <div className='navbar-container'>
                <div className='title-section'>
                    <span>
                        <Link to={'/'}>
                            <img className="nav-icon" src='https://pet-portal-assets.s3.us-west-1.amazonaws.com/Frame.svg'></img>
                        </Link>
                    </span>
                    <span className='pet-portal-title'>
                        <Link to={'/'}>
                            Pet Portal
                        </Link>
                    </span>
                </div>
                <div className='auth-section'>
                    {!currentUser ? (
                        <>
                        <div className='login-button-container'>
                            <Link to={'/login'}>
                                <button value="Login">
                                    Log in
                                </button>
                            </Link>
                        </div>
                        <div className='signup-button-container'>
                            <Link to={'/register'}>
                                <button value="Signup">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                        </>
                    ): (
                        <div className='logout-button-container'>
                            <Link to={'/'}>
                                <button value="Logout" onClick={() => dispatch(logoutUser())}>
                                    Log out
                                </button>
                            </Link>

                        </div>
                    )}
                </div>
            </div>
            {/* {sessionStatus && <SessionAlert/>>} */}
        </div>
    )

}

export default Navbar