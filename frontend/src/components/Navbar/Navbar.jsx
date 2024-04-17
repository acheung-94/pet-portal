import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { logoutUser, selectCurrentUser } from '../../store/sessionReducer';
import { useEffect } from 'react';
import { fetchPets } from '../../store/petReducer';

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPets())
    }, [dispatch])

    return(
        <div className='header-container'>
            <header className='navbar'>
                <div className='navbar-container'>
                    <div className='title-section'>
                        <span>
                            <Link to={'/'}>
                                <svg className="petportal-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" 
                                    viewBox="-50 20 120 80" style={{ enableBackground: 'new 0 0 64 64' }} xmlSpace="preserve">
                                    <path d="M6.342,46.317c-1.024-0.512-2.228-0.402-3.143,0.284C2.448,47.165,2,48.062,2,49v7c0,0.345,0.178,0.665,0.47,0.848l8,5  
                                    C10.629,61.947,10.812,62,11,62h20h4h21c0.155,0,0.309-0.036,0.447-0.105l4-2c0.181-0.09,0.329-0.233,0.427-0.409  
                                    c0.104-0.186,2.496-4.598-0.006-8.981c-2.111-3.702-5.98-4.395-6.735-4.496C54.089,46.003,54.045,46,54,46H43.414l-0.419-0.419  
                                    c0.539-0.188,1.055-0.434,1.533-0.732c0.491-0.306,0.908-0.65,1.277-1.007l3.92,1.12l0.549-1.923l-3.136-0.896  
                                    c0.414-0.707,0.674-1.372,0.819-1.854C47.985,40.195,48,40.098,48,40v-2.055l2.394-1.026l-0.787-1.838L48,35.77V35  
                                    c0-0.181-0.049-0.359-0.143-0.515l-3-5c-0.158-0.264-0.43-0.44-0.735-0.478c-0.301-0.033-0.61,0.067-0.829,0.286L40.586,32H40  
                                    V19.414L41.414,18h1.283l2.748,1.832c0.46,0.307,1.08,0.182,1.387-0.277l2-3c0.224-0.336,0.224-0.773,0-1.109l-4-6  
                                    C44.646,9.167,44.334,9,44,9h-3c-0.379,0-0.725,0.214-0.895,0.553L38.382,13H27.618l-1.724-3.447C25.725,9.214,25.379,9,25,9h-4  
                                    c-0.323,0-0.626,0.156-0.813,0.419l-5,7c-0.284,0.397-0.239,0.942,0.106,1.288l2,2c0.337,0.338,0.865,0.388,1.262,0.125L21.303,18  
                                    h2.283L24,18.414v10.87c-2.64,0.959-9.848,4.249-12.935,12.361c-1.821,4.786-1.417,9.254-0.746,12.181L8,52.434V49  
                                    C8,47.856,7.364,46.828,6.342,46.317z M41,34c0.266,0,0.52-0.105,0.707-0.293l2.095-2.094L46,35.277v1.35l-3.394,1.454l0.787,1.838  
                                    L46,38.802v1.045c-0.15,0.461-0.419,1.089-0.866,1.723l-1.859-0.531l-0.549,1.923l0.718,0.205c-0.763,0.469-1.615,0.752-2.536,0.838  
                                    c-0.386,0.036-0.717,0.292-0.848,0.656c-0.132,0.365-0.041,0.772,0.233,1.046l2,2C42.48,47.895,42.734,48,43,48h10.929  
                                    c0.572,0.087,3.595,0.676,5.203,3.496c1.646,2.885,0.521,5.878,0.12,6.76L55.764,60H46.72L46,57.838v-2.535l1.28-1.92  
                                    C47.439,53.143,47.707,53,47.994,53c0.432,0,0.654,0.285,0.729,0.407c0.076,0.123,0.231,0.449,0.038,0.834l-0.656,1.312  
                                    c-0.192,0.385-0.117,0.85,0.188,1.154l1,1C49.48,57.895,49.734,58,50,58h5v-2h-4.586l-0.197-0.197l0.334-0.667  
                                    c0.446-0.892,0.398-1.932-0.126-2.78S48.991,51,47.994,51c-0.957,0-1.846,0.476-2.378,1.272l-1.448,2.173  
                                    C44.059,54.61,44,54.803,44,55v3c0,0.107,0.018,0.214,0.052,0.316L44.613,60H41v-7h-2v7h-3v-7.003V45  
                                    c0-0.516-0.393-0.948-0.907-0.996c-0.732-0.068-1.419-0.264-2.054-0.576l1.313-0.492l-0.703-1.873l-2.46,0.923  
                                    C30.54,41.22,30.183,40.41,30,39.847v-0.326v-0.72l2.606,1.117l0.787-1.838L30,36.627v-1.35l2.198-3.664l2.095,2.094  
                                    C34.48,33.895,34.734,34,35,34h4H41z M11.485,56.857c0.363,0.218,0.825,0.184,1.152-0.087c0.326-0.271,0.447-0.717,0.301-1.115  
                                    c-0.748-2.036-2.246-7.408-0.004-13.3c0.147-0.387,0.314-0.751,0.481-1.114l0.002,0.001c3.367-7.317,10.486-9.854,11.88-10.288  
                                    C25.716,30.825,26,30.438,26,30V18c0-0.265-0.105-0.52-0.293-0.707l-1-1C24.52,16.105,24.266,16,24,16h-3  
                                    c-0.197,0-0.391,0.059-0.555,0.168l-2.318,1.545l-0.821-0.821L21.515,11h2.867l1.724,3.447C26.275,14.786,26.621,15,27,15h12  
                                    c0.379,0,0.725-0.214,0.895-0.553L41.618,11h1.847l3.333,5l-1.075,1.613l-2.168-1.445C43.391,16.059,43.197,16,43,16h-2 
                                     c-0.266,0-0.52,0.105-0.707,0.293l-2,2C38.105,18.48,38,18.735,38,19v13h-2.586l-2.707-2.707c-0.218-0.219-0.525-0.322-0.829-0.286  
                                     c-0.306,0.038-0.577,0.214-0.735,0.478l-3,5C28.049,34.641,28,34.819,28,35v0.77l-1.606-0.688l-0.787,1.838L28,37.945v1.577V40  
                                     c0,0.098,0.015,0.195,0.043,0.289c0.184,0.612,0.547,1.514,1.192,2.43l-3.586,1.345l0.703,1.873l4.354-1.633  
                                     c0.236,0.19,0.491,0.373,0.767,0.545c0.767,0.478,1.627,0.82,2.528,1.01v6.135l-5.922-0.019l-0.006,2L34,53.994V60h-2  
                                     c0-2.206-1.794-4-4-4h-2c0-4.962-4.037-9-9-9h-1v2h1c3.859,0,7,3.14,7,7v1c0,0.552,0.447,1,1,1h3c1.103,0,2,0.897,2,2H11.287  
                                     L4,55.446V49c0-0.313,0.149-0.612,0.399-0.8c0.31-0.232,0.701-0.268,1.048-0.094C5.793,48.279,6,48.613,6,49v4  
                                     c0,0.351,0.185,0.677,0.485,0.857L11.485,56.857z"/>
                                     <path d="M10.889,37.382c-6.032-7.66-8.249-15.511-6.081-21.539c1.62-4.506,6.849-11.375,14.611-11.83  
                                     c5.01-0.281,9.009,3.857,10.93,5.852c0.367,0.38,0.664,0.687,0.884,0.882c0.121,0.108,0.268,0.185,0.425,0.224l0.103,0.025  
                                     c0.319,0.079,0.659-0.004,0.905-0.224c0.213-0.189,0.5-0.483,0.855-0.848c1.953-2.006,6.03-6.171,11.061-5.887  
                                     c7.763,0.456,12.991,7.325,14.611,11.831c2.465,6.852-0.741,15.993-8.575,24.452l1.467,1.359c8.352-9.018,11.713-18.92,8.991-26.488  
                                     c-1.801-5.005-7.647-12.638-16.377-13.15C38.765,1.684,34.248,6.31,32.087,8.53c-0.042,0.043-0.084,0.086-0.124,0.127  
                                     C31.907,8.6,31.85,8.54,31.789,8.477c-2.128-2.21-6.59-6.818-12.487-6.46C10.572,2.529,4.726,10.161,2.925,15.167  
                                     C0.52,21.857,2.849,30.405,9.316,38.619L10.889,37.382z"/>
                                     <rect x="28" y="19" width="2" height="2"/><rect x="34" y="19" width="2" height="2"/>
                                     <rect x="30" y="23" width="4" height="2"/><rect x="34" y="36" width="2" height="2"/>
                                     <rect x="40" y="36" width="2" height="2"/><rect x="37" y="39" width="2" height="2"/>
                                </svg>
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

            </header>
        
        </div>
    )

}

export default Navbar