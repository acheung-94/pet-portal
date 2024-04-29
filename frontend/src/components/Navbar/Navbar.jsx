import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom"
import { logoutUser, refreshUser, selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import { selectSessionStatus, setSessionAlert } from '../../store/errorsReducer';
import SessionAlert from '../SessionAlert/SessionAlert';

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const sessionStatus = useSelector(selectSessionStatus)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
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
        const login = location.pathname === '/login'
        const home = location.pathname === '/'
        const register = location.pathname === '/register'
        if (currentUser && currentUser.sessionExpiration){ 
            const currentTime = Date.now()
            const expirationTime = new Date(currentUser.sessionExpiration).getTime()
            if (currentTime >= expirationTime && !login){
                dispatch(setSessionAlert(true))
            }
            if (currentTime >= expirationTime && home){
                dispatch(logoutUser())
            }
        } else if (!home && !login && !register) {
            navigate('/login')
        }
    }, [location, currentUser, dispatch, navigate])

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
                                    Log in
                            </Link>
                        <span className="marker"></span>
                        </div>
                        <span className='deco-1'></span>
                        <div className='signup-button-container'>
                        <span className="marker"></span>
                            <Link to={'/register'}>
                                    Sign up
                            </Link>
                        </div>
                        </>
                    ): (<>
                        <div className='logout-button-container'>
                            <span className="marker"></span>
                            <NavLink to={'/dashboard'}>
                                    Dashboard
                                
                            </NavLink>
                        </div>
                        <span className='deco-1'></span>
                        <div className='logout-button-container' onClick={() => dispatch(logoutUser())}>
                            <span className="marker"></span>
                            <Link to={'/'}>
                                Log out                               
                            </Link>

                        </div>
                    </>
                    )}
                </div>
            </div>
            {sessionStatus && <SessionAlert/>}
        </div>
    )

}

export default Navbar