import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"
import './Home.css'
const Home = () => {
    return(
        <>
            <div className="welcome-container-1">
                <div className="welcome-container-2">
                    <div className="welcome-heading">
                        <h1>Welcome to Pet Portal.</h1>
                    </div>
                    <div className="welcome-message">
                        <p> Whether you're a seasoned pet parent or embarking on your journey with a new furry friend, Pet Portal is here to simplify your pet care routine. From managing reminders and appointments to tracking your pet's health metrics, our platform is designed to make pet ownership a breeze. Join us now to ensure you never miss a beat in your pet's care routine. With Pet Portal, staying on top of your pet's health and happiness has never been easier! Welcome aboard! </p>
                    </div>
                    <p className="user-mod-title">I am ... </p>
                    <div className="user-modules">
                        <div className="to-mock-pet">
                            <div className="img-placeholder">

                            </div>
                            <Link>Thinking about getting a pet</Link>
                        </div>
                        <div className="to-auth">
                            <div className="img-placeholder">

                            </div>
                            <Link to={'/login'}>Pet owner</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Home