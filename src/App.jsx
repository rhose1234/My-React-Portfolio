import './App.css';
import Navbar from './Components/Sections/Navbar';
import Home from './Components/Sections/Home';
import About from './Components/Sections/About';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Sections/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
