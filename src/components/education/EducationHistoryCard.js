import './education.css'
import aaltoLogo from '../../images/logos/aalto.png'

const EducationHistoryCard = ({ record }) => {
    return (
        <div className='EducationHistoryCard'>
            <img src={aaltoLogo} alt='Aalto Logo' />
            <div>
                <p>{record.school}</p>
                <p>{record.degree} - {record.major}</p>
            </div>
        </div>
    )
}

export default EducationHistoryCard