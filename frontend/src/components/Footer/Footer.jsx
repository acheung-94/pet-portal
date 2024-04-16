import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='main-footer'>
            <h1 className='footer-title'> Our Development Team</h1>
            <div className="footer-links">
                <Link> Andrea Cheung </Link>
                <span className="footer-sep"></span>
                <Link> Christopher J. Trent</Link>
                <span className="footer-sep"></span>
                <Link> SoHyun Jang</Link>
                <span className="footer-sep"></span>
                <Link> Sam Kim </Link>
            </div>
        </div>
    )
}

export default Footer