import './panel.css'
import { components } from '../../data/sections'

/*
----------------
NAVIGATION PANEL
----------------
Contains child panels to indicate where the user currently is.
Quickly navigate to the target section by setting the App's current viewed section.
This should be the only way to navigate around the page.
*/
const Panel = ({ currentViewedSection, setCurrentViewedSection }) => {
    return (
        <div className="Panel">
            {components.map(
                component => (
                    <div key={component} className={(currentViewedSection === component) ? 'ViewedPanel' : ''}>
                        <button onClick={() => setCurrentViewedSection(component)}>
                            <p>{component}</p>
                        </button>
                        <button onClick={() => setCurrentViewedSection(component)}>
                            <p>{component[0]}</p>
                        </button>
                    </div>
                )
            )}
        </div>
    )
}

export default Panel