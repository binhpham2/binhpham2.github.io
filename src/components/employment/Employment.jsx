import './employment.css'
import EmploymentHistory from './EmploymentHistory'

/*
------------------
EMPLOYMENT SECTION
------------------
Contains all info about work experiences.
Should have a title, and a list of employment records (history).
*/
const Employment = ({ currentViewedSection }) => {
    return (
        <div className={`Employment ${(currentViewedSection !== 'Employment') ? 'EmploymentDisappear' : ''}`}>
            <h1>Employment</h1>
            <EmploymentHistory currentViewedSection={currentViewedSection} />
        </div>
    )
}

export default Employment