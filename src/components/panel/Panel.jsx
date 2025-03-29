import { useEffect } from 'react'
import './panel.css'
import { useState } from 'react'
import { components } from '../../data/sections'

/*
----------------
NAVIGATION PANEL
----------------
Contains child panels to indicate where the user currently is.
Quickly navigate to the target section.
*/
const Panel = () => {
    // The current section that is being viewed.
    const [currentViewedPanel, setCurrentViewedPanel] = useState(components[0])

    useEffect(() => {
        /* Everytime the user scrolls, the page is automatically snapped to the nearest section.
        Before the scroll ended, the destination section to snap into is called target component.
        At the end of the scroll, the target component becomes the current components. 
        The panel corresponding to this newly current component is highlighted. */
        window.addEventListener('scroll', () => {
            const targetViewedComponent = components[Math.round(window.scrollY / window.innerHeight)]
            setCurrentViewedPanel(targetViewedComponent)
        })
    }, [])

    // Return the FUNCTION for panel onClick events.
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
                    <div key={component} className={currentViewedPanel === component ? 'ViewedPanel' : ''}>
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