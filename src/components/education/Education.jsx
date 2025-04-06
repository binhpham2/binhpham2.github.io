import { useState } from 'react'
import './education.css'
import EducationHistory from './EducationHistory'

const Education = ({ currentViewedSection }) => {

    const [educationDim, setEducationDim] = useState(false)

    return (
        <div className={`Education ${(currentViewedSection !== 'Education') ? 'EducationDisappear' : ''} ${educationDim ? 'EducationDim' : ''}`}>
            <h1>Education</h1>
            <EducationHistory currentViewedSection={currentViewedSection} setEducationDim={setEducationDim}/>
        </div>
    )
}

export default Education