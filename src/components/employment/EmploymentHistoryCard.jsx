import './employment.css'

const EmploymentHistoryCard = ({ employment }) => {
    return (
        <div className='EmploymentHistoryCard'>
            
            {/* Front face of the card */}
            <div>
                <p>{employment.company}</p>
                <p>{employment.time}</p>
            </div>
            {/* Back face of the card */}
            <div>
                haha
                
            </div>
        </div>
    )
}

export default EmploymentHistoryCard