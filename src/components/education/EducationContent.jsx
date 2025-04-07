import { useEffect, useRef } from 'react'
import './education.css'

const EducationContent = ({ viewedRecord, setViewedRecord, setEducationDim }) => {
    
    const educationContentRef = useRef(null)

    useEffect(() => {
        const handleEducationContentClick = (event) => {
            const board = document.querySelector('.EducationContentBoard')
            if (board && !board.contains(event.target)) {
                setViewedRecord(null)
                setEducationDim(false)
            }
        }

        if (educationContentRef && educationContentRef.current) {
            educationContentRef.current.addEventListener(
                'click', handleEducationContentClick
            )
        }

        // Cleanning up by removing the current click listener before a new one is added.
        const educationContentRefCopy = educationContentRef?.current
        return () => educationContentRefCopy?.removeEventListener(
            'click', handleEducationContentClick
        )
    }, [educationContentRef, viewedRecord, setViewedRecord, setEducationDim])
    
    return (
        <div ref={educationContentRef} className={`EducationContent ${viewedRecord ? '' : 'EducationContentAbsent'}`}>
            {
                viewedRecord ? <div className='EducationContentBoard'>
                    <div className='EducationContentBoardHeadline'>
                        <h2>{viewedRecord.school}</h2>
                        <h2 onClick={() => {
                            setViewedRecord(null)
                            setEducationDim(false)
                        }}>X</h2>
                    </div>
                    
                    <div className='EducationContentText'>
                        <p>{viewedRecord.degree} ({viewedRecord.abbreviation})</p>
                        <p>{viewedRecord.time}</p>
                        <p><span>Major:</span> {viewedRecord.major}</p>
                        <p><span>Minor:</span> {viewedRecord.minor}</p>
                        <p><span>Relevant Coursework:</span></p>
                        <ul>
                            {viewedRecord.courses.map(
                                course => <li key={`${viewedRecord.degree} ${viewedRecord.school} ${course}`}><p>{course}</p></li>
                            )}
                        </ul>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default EducationContent