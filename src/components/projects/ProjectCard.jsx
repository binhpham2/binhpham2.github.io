import { useEffect, useRef } from 'react'
import './projects.css'

const ProjectCard = ({ project, cardHovered, setCardHovered }) => {

    const findProjectCardClass = (cardHoveredInput, projectName) => {
        if (!cardHoveredInput) {
            return null
        }
        else if (cardHoveredInput === projectName) {
            return 'ProjectCardExpand'
        }
        else {
            return 'ProjectCardShrink'
        }   
    }

    const projectCardRef = useRef(null)

    useEffect(() => {
        if (projectCardRef && projectCardRef.current) {
            projectCardRef.current.addEventListener('mouseenter', () => {
                setCardHovered(project.name)
            })
            projectCardRef.current.addEventListener('mouseleave', () => {
                setCardHovered(null)
            })
        }
    }, [projectCardRef, setCardHovered, project.name])

    return (
        <div 
            className={`ProjectCard ${findProjectCardClass(cardHovered, project.name)}`} 
            ref={projectCardRef}
        >
        </div>
    )
}

export default ProjectCard