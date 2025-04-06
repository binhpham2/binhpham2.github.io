import './employment.css'

const EmploymentContent = ({ viewedEmployment, setViewedEmployment }) => {
    return (
        <div className={`EmploymentContent ${viewedEmployment ? '' : 'EmploymentContentAbsent'}`}>
            {
                viewedEmployment ? <div className='EmploymentContentBoard'>
                    <h2>{viewedEmployment.company}</h2>
                    {viewedEmployment.positions.map(
                        position => (
                            <div 
                                className='EmploymentContentText'
                                key={`${position.title} ${position.time}`}
                            >
                                <p><span>{position.title}</span></p>
                                <p>{position.time}</p>
                                <>{position.achievements}</>
                            </div>
                        )
                    )}
                    <div>
                        <p onClick={() => setViewedEmployment(null)}>Close</p>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default EmploymentContent