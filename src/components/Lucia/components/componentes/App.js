import "./styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
//export default ClinicaDental;
import { ClinicaDental } from "./ClinicaDental";
import About from "./about";
import Services from "./services";

function Home() {
  return (
    <div>
      <ClinicaDental />
      <About />
      <Services />
    </div>
  );
}

export default Home;

/*function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
        <Route path="/clinicaDental" element={<ClinicaDental/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        </Routes> 
        </Router>
    </div>
  );
}
export default App;*/
