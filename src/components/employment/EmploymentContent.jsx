import { useEffect, useRef } from 'react'
import './employment.css'

const EmploymentContent = ({ viewedEmployment, setViewedEmployment, setEmploymentDim }) => {
    
    const employmentContentRef = useRef(null)

    useEffect(() => {
        const handleEmploymentContentClick = (event) => {
            const board = document.querySelector('.EmploymentContentBoard')
            if (board && !board.contains(event.target)) {
                setViewedEmployment(null) 
                setEmploymentDim(false)
            }
        }
        
        if (employmentContentRef && employmentContentRef.current) {
            employmentContentRef.current.addEventListener(
                'click', handleEmploymentContentClick
            )
        }

        // Cleanning up by removing the current click listener before a new one is added.
        const employmentContentRefCopy = employmentContentRef?.current
        return () => employmentContentRefCopy?.removeEventListener(
            'click', handleEmploymentContentClick
        )
    }, [employmentContentRef, viewedEmployment, setViewedEmployment, setEmploymentDim])

    return (
        <div ref={employmentContentRef} className={`EmploymentContent ${viewedEmployment ? '' : 'EmploymentContentAbsent'}`}>
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