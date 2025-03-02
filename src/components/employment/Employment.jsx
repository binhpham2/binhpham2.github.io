import './employment.css'
import EmploymentYoESummary from './EmploymentYoESummary'
import EmploymentTechSummary from './EmploymentTechSummary'
import EmploymentHistory from './EmploymentHistory'

const Employment = () => {
    return (
        <div className='Employment'>
            <h1>Employment</h1>
            <div className='EmploymentContent'>
                <div className='EmploymentSummary'>
                    <EmploymentYoESummary />
                    <EmploymentTechSummary />
                </div>
                <EmploymentHistory />
            </div>
        </div>
    )
}

export default Employment