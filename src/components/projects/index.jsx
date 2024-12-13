import Project from '../project';
import projectsJson from './projects.json';

const Projects = () => {

    return (
        <div>
            <h1>PROJECTS</h1>
            {projectsJson.map((projectJson, index) => (
                <Project key={index} project={projectJson} />
            ))}
        </div>
    )
};

export default Projects;