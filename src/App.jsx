import { useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Page1 from "./Pages/Page1";
import PageHolder from "./Ui/PageHolder";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";

function App() {


  return (
    <div className="bg-bk_black h-content w-full text-text_color ">
      
      <NavBar />
      <PageHolder>
        <Page1>
          <HeroSection />
        </Page1>
        <Page2 />
        <Page3/>
        <Page4/>
        <Page5 />
      </PageHolder>
    </div>
  );
}

export default App;
