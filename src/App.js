import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Section1 from "./components/section1";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section2 from "./components/section2";


function App() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
