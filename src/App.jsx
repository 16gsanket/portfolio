import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Page1 from "./Pages/Page1";
import PageHolder from "./Ui/PageHolder";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-bk_black h-content w-full text-text_color ">
      <NavBar />
      <PageHolder>
        <Page1>
          <HeroSection />
        </Page1>
        <Page2 />
        <Page3/>
      </PageHolder>
    </div>
  );
}

export default App;
