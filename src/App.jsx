import "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


import './App.css'
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
function App() {


  return (
      <Router>
          <ul className="nav-links">
              <li>
                  <Link to="/">Home </Link>
              </li>
              <li>
                  <Link to="/about">About Me </Link>
              </li>
              <li>
                  <Link to="/contact">Contact Me </Link>
              </li>
              <li>
                  <Link to="/projects">Projects </Link>
              </li>
          </ul>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
          </Routes>
      </Router>
  )
}

export default App
