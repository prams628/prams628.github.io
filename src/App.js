import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/nav';
import Experience from "./components/experience";
import About from "./components/home";
import Education from "./components/education";
import Projects from "./components/projects";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Pramod Nagaraja"
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path="/#experience" element={<Experience/>} />
          <Route path="/#education" element={ <Education/> } />
          <Route path="/#projects" element={ <Projects/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
