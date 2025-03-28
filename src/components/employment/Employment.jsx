import './employment.css'
import EmploymentHistory from './EmploymentHistory'

/*
------------------
EMPLOYMENT SECTION
------------------
Contains all info about work experiences.
Should have a title, and a list of employment records (history).
*/
const Employment = () => {
    return (
        <div className='Employment'>
            <h1>Employment</h1>
            <EmploymentHistory />
        </div>
    )
}

export default Employment