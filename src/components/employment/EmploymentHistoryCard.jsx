import './employment.css'
import koneLogo from '../../images/logos/kone.png'
import abbLogo from '../../images/logos/abb.png'
import elisaLogo from '../../images/logos/elisa.png'
import futuriceLogo from '../../images/logos/futurice.png'
import aaltoLogo from '../../images/logos/aalto.png'
import upworkLogo from '../../images/logos/upwork.png'

const EmploymentHistoryCard = ({ employment }) => {

    const companyLogos = {
        'KONE': koneLogo,
        'ABB': abbLogo,
        'Elisa': elisaLogo,
        'Futurice': futuriceLogo,
        'Aalto University': aaltoLogo,
        'Upwork': upworkLogo
    }

    return (
        <div className='EmploymentHistoryCard'>
            <img 
                src={companyLogos[employment.company]} 
                alt={employment.company} 
                className='EmploymentCompanyLogo' 
            />
        </div>
    )
}

export default EmploymentHistoryCard