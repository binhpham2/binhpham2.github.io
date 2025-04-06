import './education.css'
import aaltoLogo from '../../images/logos/aalto.png'

const EducationHistoryCard = ({ record, setViewedRecord, setEducationDim }) => {
    return (
        <div 
            className='EducationHistoryCard' 
            onClick={() => {
                setViewedRecord(record)
                setEducationDim(true)
            }}
        >
            <img src={aaltoLogo} alt='Aalto Logo' />
            <div>
                <p>{record.school}</p>
                <p>{record.degree} - {record.major}</p>
            </div>
        </div>
    )
}

export default EducationHistoryCard