import styles from './experience.module.css';
import experiencesJson from './experiences.json';

const Experience = () => {
    return (
        <div>
            <h1>Experience</h1>
            {experiencesJson.map((experience, index) => (
                <div className={styles.container} key={index}>
                    <h3 className={styles.title}>{experience?.title}</h3>
                    <p className={styles.date}>{experience?.date}</p>
                    <div className={styles.description}>{experience?.description}</div>
                </div>
            ))}
        </div>
    )
};

export default Experience;