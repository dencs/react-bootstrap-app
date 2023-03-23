import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LeftSide, { OffcanvasLeftSide } from "./components/LeftSide";
import RightSide from "./components/RightSide";
import TopBar from "./components/TopBar";
import { useState } from "react";
import ThemeStyle from "./components/ThemeStyle";

function App() {
  
  const [theme, setTheme] = useState("default");

  return (
    <>
    {theme === 'dark' && <ThemeStyle /> }
    <div className="container-md ">
       
      <OffcanvasLeftSide />
      <TopBar setTheme = {setTheme} theme = {theme} />
      <div className="row">
        <LeftSide />
        <RightSide />
      </div>
    </div>
    </>
  );
}

export default App;
