import PetGrid from '../PetGrid/PetGrid'
import './Dashboard.css'
import { useState } from 'react'
import ClinicModal from '../ClinicModal/ClinicModal'

import UpcomingReminder from '../UpcomingReminder/UpcomingReminder'

const Dashboard = () => {
    const [clinicModalState, setClinicModalState] = useState(null)


    return(
        <div className='page-container'>
            <img className="bg-image" src='https://pet-portal-assets.s3.us-west-1.amazonaws.com/layered-waves-haikei+(1).svg' />

            <h1 className='dashboard-header'><span className='pet-dash-highlight'></span>Dashboard</h1>

            <div className='dashboard-container'>
                
                <div className='index-container'>
                    <PetGrid/>
                </div>

                <div className="right-container">
                    <div className="all-reminders">
                        <div className='all-reminders-title'>
                            <h3>Upcoming Reminders</h3>
                            
                        </div>
                        <UpcomingReminder/>
                    </div>
                    {/* <div className="find-vet-container">
                        <div>
                            <h3>Find a vet near me !</h3>
                        </div>
                        <div>
                            <div><button onClick={() => setClinicModalState('clinic')}>Find a vet</button></div>
                        </div>
                    </div> */}
                </div>
                
            </div>
            {clinicModalState && <ClinicModal clinicModalState={clinicModalState} setClinicModalState={setClinicModalState}/>}
        </div>
    )
}

export default Dashboard

