import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PetGrid from '../PetGrid/PetGrid'
import './Dashboard.css'

const Dashboard = () => {

    return(
        <div className='page-container'>
            <Navbar />
            <div className='dashboard-container'>
                <h1 className='dashboard-header'>Your Dashboard</h1>
                <span className='dashboard-sep'></span>
                <div className="reminder-container">
                    <h2>Upcoming Reminders</h2>
                    <p> Reminders go here! </p>
                </div>
                <span className='dashboard-sep'></span>
                <div className='index-container'>
                    <PetGrid/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard

