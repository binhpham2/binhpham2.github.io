import './education.css'

const EducationContent = ({ viewedRecord, setViewedRecord }) => {
    return (
        <div className='EducationContent'>
            <div className='EducationContentBoard'>
                <h2>{viewedRecord.school}</h2>
                <div className='EducationContentText'>
                    <p>{viewedRecord.degree} ({viewedRecord.abbreviation})</p>
                    <p>{viewedRecord.time}</p>
                    <p><span>Major:</span> {viewedRecord.major}</p>
                    <p><span>Minor:</span> {viewedRecord.minor}</p>
                    <p><span>Relevant Coursework:</span></p>
                    <ul>
                        {viewedRecord.courses.map(
                            course => <li key={`${viewedRecord.degree} ${viewedRecord.school} ${viewedRecord.course}`}><p>{course}</p></li>
                        )}
                    </ul>
                </div>
                <div>
                    <p onClick={() => setViewedRecord(null)}>Close</p>
                </div>
            </div>
        </div>
    )
}

export default EducationContent