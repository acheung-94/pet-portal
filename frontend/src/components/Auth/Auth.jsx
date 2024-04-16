import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import './Auth.css'
import { useLocation } from "react-router"
import { useDispatch } from "react-redux";
import { createUser, loginUser } from "../../store/sessionReducer";

const Auth = () =>{
    const location = useLocation()
    const {pathname} = location

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
        setEmail('')
        setPw('')
    }
    return(
        <>
            <Navbar/>
            <div className="below-navbar">
                <div className="content-container">
                    <div className="session-form-container">
                        <div className="session-title">
                            <h2>Log in / Sign Up!</h2>
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
                                <div>
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