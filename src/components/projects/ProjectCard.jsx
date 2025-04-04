import { useEffect, useRef } from 'react'
import './projects.css'

const ProjectCard = ({ project, cardHovered, setCardHovered }) => {

    const findProjectCardClass = (cardHoveredInput, projectName) => {
        if (!cardHoveredInput) {
            return ''
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
            <div className='ProjectCardContent'>
                <h2>{project.name}</h2>
                <p><span>Description:</span> {project.description}</p>
                { project.note ? <p><span>Note:</span> {project.note}</p> : null }
                <p><span>Stack:</span> {project.stack}</p>
                <p><span>Source code:</span> <a href={project.link} target="_blank" rel="noopener noreferrer">View</a></p>
            </div>
        </div>
    )
}

export default ProjectCard