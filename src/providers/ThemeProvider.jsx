import "../App.css";
import ThemeToggle from "../components/themeToggle";
import { useThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
    const { theme } = useThemeContext();

    return (
        <div className={theme}>
            <ThemeToggle />
            {children}
        </div>
    );
};

export default ThemeProvider;