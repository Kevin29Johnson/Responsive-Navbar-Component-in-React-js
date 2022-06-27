import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
  
      <Footer/>
      </Router>
    </div>
  );
}
