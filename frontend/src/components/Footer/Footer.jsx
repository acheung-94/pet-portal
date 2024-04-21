import './Footer.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return(
        <div className='main-footer'>
            <h1 className='footer-title'> Our Development Team</h1>
            <div className="footer-links">
                <div className="developer">
                    Andrea Cheung 
                    <Link to="https://github.com/acheung-94"> 
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/andrea-cheung-b9b5072b2/"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
                <span className="footer-sep"></span>
                <div className="developer">
                    Christopher J. Trent 
                    <Link to="https://github.com/ChristopherJTrent"> 
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/christopher-trent-95b581190/"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
                
                <span className="footer-sep"></span>
                <div className="developer">
                    Sam Kim
                    <Link to="https://github.com/sam-kim99"> 
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/samuel-kim-b8460b225"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
                <span className='footer-sep'></span>
                <div className="developer">
                    SoHyun Jang
                    <Link to="https://github.com/shjang1025"> 
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/sohyun-jang-469918115"> 
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer