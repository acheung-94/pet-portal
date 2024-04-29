import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './Home.css'
import { useDispatch} from "react-redux"
import { loginUser} from "../../store/sessionReducer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState()
    const handleDemoLogin = ()=>{
        const demo = {
            email: "demo@demo.com",
            password: "password"
        }
        dispatch(loginUser(demo)).then(()=> navigate('/dashboard'))

    }

    useEffect( () => {
        setLoaded(true)
    }, [])

    return(
        <div className="home-page-container">
            <Navbar/>
            <div className="welcome-container-1">
                <div className="section-1">
                    <img className="bg-image" src='https://pet-portal-assets.s3.us-west-1.amazonaws.com/layered-waves-haikei.svg' />
                    <div className="display-container">
                        <div className="display-border">
                            <img className="display-dog" src="https://pet-portal-assets.s3.us-west-1.amazonaws.com/depositphotos_570233356-stock-photo-australian-cattle-dog-forest-hiking.jpg" />
                        </div>
                    </div>

                    <div className="section-1-text">
                        <div className={`welcome-heading ${loaded && 'loaded'}`}>
                            <h1>Welcome to Pet Portal.</h1>
                            <span className="deco-1"></span>
                            <span className="deco-3"></span>
                        </div>
                        <div className="welcome-message">
                            <div className="welcome-message-1">
                                
                                <p>Whether you&apos;re a seasoned pet parent or embarking on your journey
                                 with a new furry friend, Pet Portal is here to simplify your pet care 
                                 routine.</p>
                            </div>
                            <div className="welcome-message-2">
                                
                                <p>Keep track of your pet&apos;s important information, health reminders, and appointments all in one convenient location!</p>
                            </div>
                            <div className="welcome-message-3">
                                <div className="welcome-links">
                                    <h3> Ready to get started? </h3>
                                    <div className="demo-login" onClick={handleDemoLogin}>
                                        Try it out
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home