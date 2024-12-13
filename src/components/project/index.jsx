import styles from './project.module.css';

const Project = ({ project }) => {

    return (
        <a href={project?.url} className={styles.container}>
            <h3 className={styles.title}>{project?.title}</h3>
            <div className={styles.description}>{project?.description}</div>
        </a>
    )
}

export default Project;