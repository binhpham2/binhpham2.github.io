import './employment.css'
import EmploymentHistoryCard from './EmploymentHistoryCard'

const EmploymentHistory = () => {

    const employments = [
        {
            'company': 'KONE',
            'time': 'May 2024 - May 2025',
            'positions': [
                {
                    'title': 'Master Thesis Worker',
                    'time': 'December 2024 - May 2025',
                },
                {
                    'title': 'Data Engineer Intern',
                    'time': 'May 2024 - December 2024',
                },
            ]
        },
        {
            'company': 'KONE2',
            'time': 'May 2024 - May 2025',
            'positions': [
                {
                    'title': 'Master Thesis Worker',
                    'time': 'December 2024 - May 2025',
                },
                {
                    'title': 'Data Engineer Intern',
                    'time': 'May 2024 - December 2024',
                },
            ]
        },
    ]

    return (
        <div className='EmploymentHistory'>
            {employments.map(
                employment => <EmploymentHistoryCard key={employment.company + employment.time} employment={employment}/>
            )}
        </div>
    )
}

export default EmploymentHistory