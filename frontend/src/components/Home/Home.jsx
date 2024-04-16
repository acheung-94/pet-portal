import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import './Home.css'
const Home = () => {
    return(
        <>
            <div className="welcome-container-1">
                <div className="section-1">
                    <div className="display-border">
                        <img className="display-dog" src="https://pet-portal-assets.s3.us-west-1.amazonaws.com/depositphotos_570233356-stock-photo-australian-cattle-dog-forest-hiking.jpg" />
                    </div>

                    <div className="section-1-text">
                        <div className="welcome-heading">
                            <h1>Welcome to Pet Portal.</h1>
                        </div>
                        <div className="welcome-message">
                            <p> Whether you're a seasoned pet parent or embarking on your journey
                                 with a new furry friend, Pet Portal is here to simplify your pet care 
                                 routine. From managing reminders and appointments to tracking your 
                                 pet's health metrics, our platform is designed to make pet ownership 
                                 a breeze. Join us now to ensure you never miss a beat in your pet's
                                  care routine. With Pet Portal, staying on top of your pet's 
                                  health and happiness has never been easier! Welcome aboard! </p>
                            <div className="h2-splash"> <h3> ✨New here? Get started below. </h3> </div>
                            <div className="welcome-links">
                                <Link>Thinking about getting a pet</Link>
                                <Link to={'/login'}>Pet Parent</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Home