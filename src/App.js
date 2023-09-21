import "./App.css";
import { useEffect } from "react";

import Intro from "./pages/Intro";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Intro />
    </div>
  );
};

export default App;
