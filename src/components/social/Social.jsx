import './social.css'

const Social = ({ currentViewedSection }) => {
    return (
        <div className={`Social ${currentViewedSection !== 'Social' ? 'SocialDisappear' : ''}`}>
            <h1>Social</h1>
            <div className='SocialGroup'>
                <h2>Contacts</h2>
                <p>Email: binh.pham5918@gmail.com</p>
                <p>Phone: (+358) 414805030</p>
            </div>
            <div className='SocialGroup'>
                <h2>Media</h2>
                <div>
                    <a href={'https://www.linkedin.com/in/binh-pham-aab6a719a/'} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={'https://github.com/pdtbinh'} target="_blank" rel="noopener noreferrer">Github</a>
                    <a href={'/BinhPham_CV.pdf'} download='BinhPham_Resume.pdf' target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Social