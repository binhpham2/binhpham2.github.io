import './employment.css'
import koneLogo from '../../images/logos/kone.png'
import abbLogo from '../../images/logos/abb.png'
import elisaLogo from '../../images/logos/elisa.png'
import futuriceLogo from '../../images/logos/futurice.png'
import aaltoLogo from '../../images/logos/aalto.png'
import slushLogo from '../../images/logos/slush.png'

const EmploymentHistoryCard = ({ employment, type, setViewedEmployment, setEmploymentDim }) => {

    const companyLogos = {
        'KONE': koneLogo,
        'ABB': abbLogo,
        'Elisa': elisaLogo,
        'Futurice': futuriceLogo,
        'Aalto University': aaltoLogo,
        'Slush': slushLogo
    }

    return (
        <div 
            className={`EmploymentHistoryCard ${type}`} 
            onClick={() => {
                setViewedEmployment(employment) 
                setEmploymentDim(true)
            }}
        >
            <img 
                src={companyLogos[employment.company]} 
                alt={employment.company} 
                className='EmploymentCompanyLogo'
            />
        </div>
    )
}

export default EmploymentHistoryCard