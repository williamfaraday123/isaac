import styles from './leftScreen.module.css';

const LeftScreen = ({ handleVisibleComponent }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Hi, my name is Isaac</h1>
            <h3 className={styles.role}>University student, Software developer</h3>
            <p className={styles.description}>I build accessible digital experiences for the web.</p>
            {["About", "Experience", "Projects"].map((component, index) => (
                <div key={index} className={styles.menuItem}>
                    <button onClick={() => handleVisibleComponent(component)} className={styles.button}>{component}</button>
                </div>
            ))}
            <a href='https://github.com/williamfaraday123' className={styles.link}>Github</a>
            <a href="mailto:isaa0015@e.ntu.edu.sg" className={styles.link}>Email</a>
        </div>
    )
};

export default LeftScreen;