import './education.css'

const EducationHistoryCard = ({ record }) => {
    return (
        <div className='EducationHistoryCard'>
            <p>{record.degree}</p>
        </div>
    )
}

export default EducationHistoryCard