import './panel.css'

const Panel = () => {
    return (
        <div className="Panel">
            <div>
                <button><p>Home</p></button>
                <button><p>H</p></button>
            </div>
            <div>
                <button><p>Employment</p></button>
                <button><p>Em</p></button>
            </div>
            <div>
                <button><p>Education</p></button>
                <button><p>Ed</p></button>
            </div>
            <div>
                <button><p>Projects</p></button>
                <button><p>P</p></button>
            </div>
            <div>
                <button><p>Contacts</p></button>
                <button><p>C</p></button>
            </div>    
        </div>
    )
}

export default Panel