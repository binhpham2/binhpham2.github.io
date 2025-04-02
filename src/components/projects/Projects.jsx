import './projects.css'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <div className='ProjectsList'>
                {projects.map(
                    project => <ProjectCard key={project.name} project={project} />
                )}
            </div>
        </div>
    )
}

export default Projects