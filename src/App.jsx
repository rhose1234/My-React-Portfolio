import Navbar from './Components/Sections/Navbar';
import Home from './Components/Sections/Home';
import About from './Components/Sections/About';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Sections/Footer';
import Gallery from './Components/Sections/Gallery';

function App() {
  return (
    <div>
      <Navbar />
      <section id="#home"><Home /></section>
      <section id="#about"><About /></section>
      <section id="#projects"><Projects /></section>
      <section id="#gallery"><Gallery /></section>
      <section id="#contact"><Contact /></section> 
      <Footer />
    </div>
  );
}

export default App;
