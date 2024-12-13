import { useState } from 'react';
import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import ThemeProvider from './providers/ThemeProvider';
import LeftScreen from './screens/leftScreen/LeftScreen';
import RightScreen from './screens/rightScreen/RightScreen';

function App() {
  const [visibleComponent, setVisibleComponent] = useState("Projects");
  const handleVisibleComponent = (component) => {
    setVisibleComponent(component);
  };

  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div style={{ display: "flex" }}>
          <div className="left-screen">
            <LeftScreen handleVisibleComponent={handleVisibleComponent} />
          </div>
          <div className="right-screen">
            <RightScreen visibleComponent={visibleComponent} />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
