import './education.css'
import { education } from '../../data/education'
import EducationHistoryCard from './EducationHistoryCard'

const EducationHistory = () => {
    return (
        <div className='EducationHistory'>
            {education.map(
                record => <EducationHistoryCard 
                    key={`${record.degree} ${record.major} ${record.minor} ${record.school}`}
                    record={record} 
                />
            )}
        </div>
    )
}

export default EducationHistory