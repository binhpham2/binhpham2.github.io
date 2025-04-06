import './education.css'
import { education } from '../../data/education'
import EducationHistoryCard from './EducationHistoryCard'
import { useEffect, useState } from 'react'
import EducationContent from './EducationContent'

const EducationHistory = ({ currentViewedSection }) => {

    const [viewedRecord, setViewedRecord] = useState(null)

    useEffect(() => {
        setViewedRecord(null)
    }, [currentViewedSection])

    return (
        <div className='EducationHistory'>
            <EducationContent viewedRecord={viewedRecord} setViewedRecord={setViewedRecord} />
            {education.map(
                record => <EducationHistoryCard 
                    key={`${record.degree} ${record.major} ${record.minor} ${record.school}`}
                    record={record} 
                    setViewedRecord={setViewedRecord}
                />
            )}
        </div>
    )
}

export default EducationHistory