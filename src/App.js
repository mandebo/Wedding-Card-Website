import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/Aboutme";
import Services from "./components/Services";


import { useCallback } from "react";
import Quotes from "./components/Quotes";
import { Quote } from "react-bootstrap-icons";

function App() {
  return (
    <div className="father-container shadow">
      
      <Header />
      <About />
      <Quotes/>
      <Navbar/>
    
     
    </div>
  );
}

export default App;
