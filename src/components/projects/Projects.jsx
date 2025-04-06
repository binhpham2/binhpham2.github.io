import './projects.css'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import { useState } from 'react'

const Projects = ({ currentViewedSection }) => {

    // Which card is being hovered?
    const [cardHovered, setCardHovered] = useState(null)

    return (
        <div className={`Projects ${(currentViewedSection !== 'Projects') ? 'ProjectsDisappear' : ''}`}>
            <h1>Projects</h1>
            <div className='ProjectsList'>
                {projects.map(
                    project => { return (
                        <ProjectCard 
                            key={project.name} 
                            project={project} 
                            cardHovered={cardHovered} 
                            setCardHovered={setCardHovered} 
                        />
                    )}
                )}
            </div>
        </div>
    )
}

export default Projects