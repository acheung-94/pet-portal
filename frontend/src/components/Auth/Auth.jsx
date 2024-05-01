import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer.jsx";
import '../Home/Home.css'
import './Auth.css'
import { useLocation } from "react-router"
import { useDispatch } from "react-redux";
import { createUser, loginUser } from "../../store/sessionReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Auth = () =>{
    const location = useLocation()
    const {pathname} = location
    const dispatch = useDispatch();
    const isRegister = pathname === '/register'
    const isLogin = pathname === '/login'
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [PwConfirm, setPwConfirm] = useState('')
    const [loginErrors, setLoginErrors] = useState('')
    const [registrationErrors, setRegistrationErrors] = useState('')
    const [pwError, setPwError] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();

        if(isRegister) {
            dispatch(createUser({email: email, password: pw}))
                .then(()=> navigate('/dashboard'))
                .catch( res => {
                    if (!res.ok){
                        res.json().then(err => setRegistrationErrors(err.email))
                    }
                } )
        } else if (isLogin) {
            dispatch(loginUser({email: email, password: pw}))
                .then(()=> navigate('/dashboard'))
                .catch(res => {
                    if (!res.ok){
                        setLoginErrors('Invalid credentials')
                    }
                })
                
        }
        setEmail('');
        setPw('');
        setPwConfirm('')
    }

    useEffect(() => {
        setEmail('');
        setPw('');
        setPwConfirm('')
        setLoginErrors('')
        setRegistrationErrors('')
        setPwError(false)
    }, [location.pathname]);

    useEffect(() => {
        
        if ((pw !== PwConfirm && isRegister)) {
            setPwError(true)
        }else{
            setPwError(false)
        }
    }, [pw, PwConfirm, isRegister])

    return(
        <>
            <Navbar/>
            <div className="below-navbar">
                <div className="content-container">
                <img className="bg-image" src='https://pet-portal-assets.s3.us-west-1.amazonaws.com/layered-waves-haikei+(1).svg' />
                    <div className="session-form-container">
                        <div className="session-title">
                            {pathname === '/login' ? (
                                <h2>Log in to your account</h2>
                            ) : (
                                <h2>Create an Account</h2>
                            )
                            }
                        </div>
                        <div className="session-input-field">
                            <form className="session-form" onSubmit={handleSubmit}>
                                <div>
                                    <label className="email-label-container">
                                        <div className="email-label">
                                            Email: 
                                        </div>
                                        <input id="email-input" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <span className="auth-errors">
                                    {registrationErrors && registrationErrors}
                                </span>
                                <div>
                                    <label className="password-label-container">
                                        
                                        <div className="password-label">
                                            Password: 
                                        </div>
                                        <input id="password-input" type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)}/>
                                    </label>
                                </div>
                                <div>
                                    {isRegister && (
                                        <label className="password-label-container">
                                        
                                        <div className="password-label">
                                            Confirm Password: 
                                        </div>
                                        <input id="password-input" type="password" placeholder="Password" onChange={(e) => setPwConfirm(e.target.value)}/>
                                        </label>

                                    )}
                                </div>
                                <span className="auth-errors">
                                    { loginErrors && loginErrors}
                                    { (pwError && isRegister) && "Passwords must match!"}
                                </span>
                                    <button className="auth-button-submit" type="submit" disabled={!email.length || !pw.length || pwError}>Submit</button>
                                    { (email.length && pw.length && !pwError) ?
                                        (<span className='deco-2'></span>) :
                                        (<span></span>)
                                        }

                            </form>
                                {isLogin && (
                                    <div className="auth-button-new-to-portal">
                                        <span className="marker"></span>
                                        <Link to={'/register'}>
                                            New to Pet Portal
                                        </Link>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            
        </>
    )
}
export default Auth