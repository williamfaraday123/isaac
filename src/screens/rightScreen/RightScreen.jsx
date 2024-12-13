import About from "../../components/about";
import Experience from "../../components/experience";
import Projects from "../../components/projects";

const RightScreen = ({ visibleComponent }) => {
    return (
        <div>
            {visibleComponent == "About" && <About />}
            {visibleComponent == "Experience" && <Experience />}
            {visibleComponent == "Projects" && <Projects />}
        </div>
    );
};

export default RightScreen;