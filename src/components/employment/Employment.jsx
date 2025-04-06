import { useState } from 'react'
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

    const [employmentDim, setEmploymentDim] = useState(false)

    return (
        <div className={`Employment ${(currentViewedSection !== 'Employment') ? 'EmploymentDisappear' : ''} ${employmentDim ? 'EmploymentDim' : ''}`}>
            <h1>Employment</h1>
            <EmploymentHistory currentViewedSection={currentViewedSection} setEmploymentDim={setEmploymentDim} />
        </div>
    )
}

export default Employment