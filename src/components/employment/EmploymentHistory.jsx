import './employment.css'
import EmploymentHistoryCard from './EmploymentHistoryCard'
import { employments } from '../../data/employment'

const EmploymentHistory = () => {
    return (
        <div className='EmploymentHistory'>
            {employments.map(
                employment => <EmploymentHistoryCard 
                    key={employment.company + employment.time + 'first'} 
                    employment={employment}
                    type={'FirstTypeEmploymentHistoryCard'}
                />
            )}
            {employments.map(
                employment => <EmploymentHistoryCard 
                    key={employment.company + employment.time  + 'second'} 
                    employment={employment}
                    type={'SecondTypeEmploymentHistoryCard'}
                />
            )}
        </div>
    )
}

export default EmploymentHistory