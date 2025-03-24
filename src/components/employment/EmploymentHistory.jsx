import './employment.css'
import EmploymentHistoryCard from './EmploymentHistoryCard'
import { employments } from '../../data/employment'

const EmploymentHistory = () => {
    return (
        <div className='EmploymentHistory'>
            {employments.map(
                employment => <EmploymentHistoryCard key={employment.company + employment.time} employment={employment}/>
            )}
        </div>
    )
}

export default EmploymentHistory