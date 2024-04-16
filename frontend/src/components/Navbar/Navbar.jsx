import './Navbar.css'
import { MdOutlinePets } from "react-icons/md";
import {Link} from "react-router-dom"
const Navbar = () => {

    return(
        <div className='header-container'>
            <header className='navbar'>
                <div className='navbar-container'>
                    <div className='title-section'>
                        <span>
                            <Link to={'/'}>
                                <MdOutlinePets
                                    className="petportal-icon"
                                    size="20"
                                    style={{fill: "black", backgroundColor: "transparent"}}
                                />
                            </Link>
                        </span>
                        <span className='pet-portal-title'>
                            <Link to={'/'}>
                                Pet Portal
                            </Link>
                        </span>
                    </div>
                    <div className='auth-section'>
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
                    </div>
                </div>

            </header>
        
        </div>
    )

}

export default Navbar