import './employment.css'
import EmploymentHistoryCard from './EmploymentHistoryCard'
import { employments } from '../../data/employment'
import { useEffect, useState } from 'react'
import EmploymentContent from './EmploymentContent'

const EmploymentHistory = ({ currentViewedSection, setEmploymentDim }) => {

    const [viewedEmployment, setViewedEmployment] = useState(null)

    useEffect(() => {
        setViewedEmployment(null)
        setEmploymentDim(false)
    }, [currentViewedSection, setEmploymentDim])

    /* There are two type of employment cards. Let them be first stack and second stack. 
    The reason there are those two stacks is to make the company logos scroll infinitely.
    The first stack (type) is the one positioned on the left, and the second is on the right. 
    The container (history) is displayed in flex, and aligns its items to flex-start. 
    Therefore, the first type is visible in the beginning, and the second is visible on scrolling. */
    return (
        <div className='EmploymentHistory'>
            <EmploymentContent 
                viewedEmployment={viewedEmployment} 
                setViewedEmployment={setViewedEmployment} 
                setEmploymentDim={setEmploymentDim} 
            />
            {employments.map(
                employment => <EmploymentHistoryCard 
                    key={employment.company + employment.time + 'first'} 
                    employment={employment}
                    type={'FirstTypeEmploymentHistoryCard'} 
                    setViewedEmployment={setViewedEmployment} 
                    setEmploymentDim={setEmploymentDim}
                />
            )}
            {employments.map(
                employment => <EmploymentHistoryCard 
                    key={employment.company + employment.time  + 'second'} 
                    employment={employment}
                    type={'SecondTypeEmploymentHistoryCard'} 
                    setViewedEmployment={setViewedEmployment} 
                    setEmploymentDim={setEmploymentDim}
                />
            )}
        </div>
    )
}

export default EmploymentHistory