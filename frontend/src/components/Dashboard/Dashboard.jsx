import PetGrid from '../PetGrid/PetGrid'
import './Dashboard.css'

const Dashboard = () => {

    return(
        <div className='page-container'>
                <h1 className='dashboard-header'>Your Dashboard</h1>
                <span className='dashboard-sep'></span>
            <div className='dashboard-container'>
                
                <div className='index-container'>
                    <PetGrid/>
                </div>
                <span className='dashboard-sep'></span>
                <div className="right-container">
                    <div className="all-reminders">
                        <h3>Reminder container</h3>
                    </div>
                    <div className="find-vet-container">
                        <h3>Find yoself a vet</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard

