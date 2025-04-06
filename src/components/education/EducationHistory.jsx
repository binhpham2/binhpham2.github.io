import './education.css'
import { education } from '../../data/education'
import EducationHistoryCard from './EducationHistoryCard'
import { useEffect, useState } from 'react'
import EducationContent from './EducationContent'

const EducationHistory = ({ currentViewedSection, setEducationDim }) => {

    const [viewedRecord, setViewedRecord] = useState(null)

    useEffect(() => {
        setViewedRecord(null)
        setEducationDim(false)
    }, [currentViewedSection, setEducationDim])

    return (
        <div className='EducationHistory'>
            <EducationContent viewedRecord={viewedRecord} setViewedRecord={setViewedRecord} setEducationDim={setEducationDim} />
            {education.map(
                record => <EducationHistoryCard 
                    key={`${record.degree} ${record.major} ${record.minor} ${record.school}`}
                    record={record} 
                    setViewedRecord={setViewedRecord} 
                    setEducationDim={setEducationDim}
                />
            )}
        </div>
    )
}

export default EducationHistory