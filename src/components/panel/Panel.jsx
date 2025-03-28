import { useEffect } from 'react'
import './panel.css'
import { useState } from 'react'

const Panel = () => {

    const components = ['Welcome', 'Employment', 'Education', 'Projects', 'Contacts']
    const [currentViewedPanel, setCurrentViewedPanel] = useState(components[0])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const targetViewedComponent = components[Math.round(window.scrollY / window.innerHeight)]
            setCurrentViewedPanel(targetViewedComponent)
        })
    }, [])

    const findPanelClickHandler = (componentClass) => {
        const handlePanelClick = () => {
            const targetComponent = document.querySelector(`.${componentClass}`)
            targetComponent.scrollIntoView({ behavior: "smooth" })
        }
        return handlePanelClick
    }

    return (
        <div className="Panel">
            {components.map(
                component => (
                    <div className={currentViewedPanel === component ? 'ViewedPanel' : ''}>
                        <button onClick={findPanelClickHandler(component)}>
                            <p>{component}</p>
                        </button>
                        <button onClick={findPanelClickHandler(component)}>
                            <p>{component[0]}</p>
                        </button>
                    </div>
                )
            )}
        </div>
    )
}

export default Panel