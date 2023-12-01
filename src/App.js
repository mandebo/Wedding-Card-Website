import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/Aboutme";
import Services from "./components/Services";


import { useCallback } from "react";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="father-container shadow">
      
      <Header />
      <About />
      <Navbar/>
     
    </div>
  );
}

export default App;
