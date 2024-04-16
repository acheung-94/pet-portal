import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer.jsx";
import '../Home/Home.css'
import './Auth.css'
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser, selectCurrentUser } from "../../store/sessionReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Auth = () =>{
    const location = useLocation()
    const {pathname} = location
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch();
    const isRegister = pathname === '/register'
    const isLogin = pathname === '/login'

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log("THIS IS ", email, pw)
        if(isRegister) {
            dispatch(createUser({email: email, password: pw}))
        } else if (isLogin) {
            dispatch(loginUser({email: email, password: pw}))
        }
        setEmail('');
        setPw('');
        window.location.href= "/"
    }
    useEffect(() => {

        console.log("Email or password changed:", email, pw);
    }, [email, pw]);
    useEffect(() => {
        setEmail('');
        setPw('');
    }, [location.pathname]);
    return(
        <>
            <Navbar/>
            <div className="below-navbar">
                <div className="content-container">
                    <div className="session-form-container">
                        <div className="session-title">
                            {pathname === '/login' ? (
                                <h2>Log in as an existing user</h2>
                            ) : (
                                <h2>Welcome to Pet Portal</h2>
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
                                        <input id="email-input" type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <div>
                                    <label className="password-label-container">
                                        
                                        <div className="password-label">
                                            Password: 
                                        </div>
                                        <input id="password-input" type="password" onChange={(e) => setPw(e.target.value)}/>
                                    </label>
                                </div>
                                <div className="auth-button-container">
                                    <div className="auth-button-submit">
                                        <button type="submit">Submit</button>
                                    </div>
                                {pathname === '/login' ? (
                                    <div className="auth-button-new-to-portal">
                                        <Link to={'/register'}>
                                            <button>New to Pet Portal</button>
                                        </Link>
                                    </div>
                                ): (
                                    <div></div>
                                )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            
        </>
    )
}
export default Auth