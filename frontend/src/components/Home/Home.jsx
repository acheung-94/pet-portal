import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './Home.css'
import { useDispatch} from "react-redux"
import { loginUser} from "../../store/sessionReducer"
import { useEffect, useState } from "react"

const Home = () => {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState()
    const handleDemoLogin = ()=>{
        const demo = {
            email: "demo@demo.com",
            password: "demouser"
        }
        dispatch(loginUser(demo))
    }

    useEffect( () => {
        setLoaded(true)
    }, [])

    return(
        <div className="home-page-container">
            <Navbar/>
            <div className="welcome-container-1">
                <div className="section-1">
                    <div className="display-border">
                        <img className="display-dog" src="https://pet-portal-assets.s3.us-west-1.amazonaws.com/depositphotos_570233356-stock-photo-australian-cattle-dog-forest-hiking.jpg" />
                    </div>

                    <div className="section-1-text">
                        <div className={`welcome-heading ${loaded && 'loaded'}`}>
                            <h1>Welcome to Pet Portal.</h1>
                            <span className="deco-1"></span>
                            <span className="deco-3"></span>
                        </div>
                        <div className="welcome-message">
                            <div className="welcome-message-1">
                                <span className='deco-1'></span>
                                <p>Whether you&apos;re a seasoned pet parent or embarking on your journey
                                 with a new furry friend, Pet Portal is here to simplify your pet care 
                                 routine.</p>
                            </div>
                            <div className="welcome-message-2">
                                <span className='deco-1'></span>
                                <p>Keep track of your pet&apos;s important information, health reminders, and appointments all in one convenient location!</p>
                            </div>
                            <div className="welcome-message-3">
                                <span className='deco-1'></span>
                                <div className="welcome-links">
                                    <div className="h2-splash"> <h3> ✨ Ready to get started? </h3> </div>
                                    <div className="demo-login" onClick={handleDemoLogin}>
                                        <span className='deco-2'></span>
                                        Log in as a demo user
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