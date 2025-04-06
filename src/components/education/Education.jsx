import './education.css'
import EducationHistory from './EducationHistory'

const Education = ({ currentViewedSection }) => {
    return (
        <div className={`Education ${(currentViewedSection !== 'Education') ? 'EducationDisappear' : ''}`}>
            <h1>Education</h1>
            <EducationHistory />
        </div>
    )
}

export default Education