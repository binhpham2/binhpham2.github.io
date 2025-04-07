import './education.css'

const EducationContent = ({ viewedRecord, setViewedRecord, setEducationDim }) => {
    return (
        <div className={`EducationContent ${viewedRecord ? '' : 'EducationContentAbsent'}`}>
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