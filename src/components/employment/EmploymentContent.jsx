import './employment.css'

const EmploymentContent = ({ viewedEmployment, setViewedEmployment, setEmploymentDim }) => {
    return (
        <div className={`EmploymentContent ${viewedEmployment ? '' : 'EmploymentContentAbsent'}`}>
            {
                viewedEmployment ? <div className='EmploymentContentBoard'>
                    <div className='EmploymentContentBoardHeadline'>
                        <h2>{viewedEmployment.company}</h2>
                        <h2 onClick={() => {
                            setViewedEmployment(null) 
                            setEmploymentDim(false)
                        }}>X</h2>
                    </div>
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
                </div> : null
            }
        </div>
    )
}

export default EmploymentContent