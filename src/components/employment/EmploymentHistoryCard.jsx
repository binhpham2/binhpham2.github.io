import './employment.css'

const EmploymentHistoryCard = ({ employment }) => {
    return (
        <div className='EmploymentHistoryCard'>
            <p>{employment.company}</p>
            <p>{employment.time}</p>
        </div>
    )
}

export default EmploymentHistoryCard