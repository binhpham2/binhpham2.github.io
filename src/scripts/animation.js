/*
------------------
LIST OF COMPONENTS
------------------
*/
const components = ['Welcome', 'Employment', 'Education']

/*
----------------------------------
HIGHLIGHT THE CURRENT VIEWED PANEL
----------------------------------
Find the current viewed panel.
*/
export const highlightViewedPanel = () => {
    const currentViewedComponent = components[Math.round(window.scrollY / window.innerHeight)]
}

/*
-------------------------------------------
AUTO-SCROLL TO THE NEXT OR PREVIOUS SECTION
-------------------------------------------
Once any kind of scrolling (wheel or keyboard) is detected:
A. If the scroll is upwards:
    1. Move to the previous section.
    2. Highlight the current viewed section on the panel.
B. If the scroll is upwards:
    Same as A.
*/
export const autoScroll = (disableAutoScroll) => {
    // Find target component.
    const findTargetComponent = (current, direction) => {
        // Find the index of the current viewed component in the above list.
        let currentComponentIndex = 0
        while (current !== components[currentComponentIndex]) {
            currentComponentIndex++
        }
        // Find the index of the target component in the above list.
        let targetComponentIndex = 0
        if (direction === 'up') {
            targetComponentIndex = Math.max(currentComponentIndex-1, 0)
        } else if (direction === 'down') {
            targetComponentIndex = Math.min(components.length - 1, currentComponentIndex + 1)
        }
        console.log(targetComponentIndex)
        return components[targetComponentIndex]
    }

    // Auto-scroll to the specified component.
    const scrollToComponent = (componentClass) => {
        const component = document.querySelector(`.${componentClass}`)
        component.scrollIntoView()
    }

    window.addEventListener('scroll', () => {
        if (disableAutoScroll.current === false) {
            const currentViewedComponent = components[Math.round(window.scrollY / window.innerHeight)]
            scrollToComponent(findTargetComponent(currentViewedComponent, 'down'))
            disableAutoScroll.current = true
            setTimeout(() => disableAutoScroll.current = false, 2000)
        }
    })
}