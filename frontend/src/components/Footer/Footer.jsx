import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='main-footer'>
            <h1 className='footer-title'> Our Development Team</h1>
            <div className="footer-links">
                <Link> <span className='deco-1'></span><span className='deco-2'></span>Andrea Cheung </Link>
                <span className="footer-sep"></span>
                <Link>  <span className='deco-1'></span><span className='deco-2'></span>Christopher J. Trent</Link>
                <span className="footer-sep"></span>
                <Link>  <span className='deco-1'></span><span className='deco-2'></span>SoHyun Jang</Link>
                <span className="footer-sep"></span>
                <Link>  <span className='deco-1'></span><span className='deco-2'></span>Sam Kim </Link>
            </div>
        </div>
    )
}

export default Footer