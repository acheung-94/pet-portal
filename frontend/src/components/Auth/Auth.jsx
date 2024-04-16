import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import './Auth.css'
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { createUser, loginUser, selectCurrentUser } from "../../store/sessionReducer";
import { useEffect } from "react";

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
        // window.location.href= "/"
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
                                <h2>Log in</h2>
                            ) : (
                                <h2>Sign Up</h2>
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
                                <div className="submit-container">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
export default Auth