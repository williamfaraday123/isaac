import { useThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    )
};

export default ThemeToggle;