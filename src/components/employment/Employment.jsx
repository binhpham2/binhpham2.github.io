import './employment.css'
import EmploymentHistory from './EmploymentHistory'

/*--------------------------------
Component structure:

Employment
    h1 (text "Employment")
    EmploymentHistory
        EmploymentHistoryCard
--------------------------------*/

const Employment = () => {
    return (
        <div className='Employment'>
            <h1>Employment</h1>
            <EmploymentHistory />
        </div>
    )
}

export default Employment