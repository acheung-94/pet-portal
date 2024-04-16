import Navbar from '../Navbar/Navbar'
import './Dashboard.css'

const Dashboard = () => {

    return(
        <>
            <Navbar />
            <div className='dashboard-container'>
                <h1 className='dashboard-header'>Dashboard</h1>
                <div className="reminder-container">
                    <h2>Upcoming Reminders</h2>
                    <p> Reminders go here! </p>
                </div>
                <div className='index-container'>
                    
                </div>
            </div>
        </>
    )
}

export default Dashboard

