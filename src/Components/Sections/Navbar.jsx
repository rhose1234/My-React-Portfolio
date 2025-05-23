import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import mypicture from "../../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scrolling function
  const handleOpen = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-transparent shadow-xs fixed top-0 w-full z-10 h-auto shadow-[20px] place-content-center py-6 px-4 md:px-28">
      <div className="container flex justify-between items-center gap-x-20">

        {/* Logo */}
        <Link to="/" className="w-1/2">
          <img src={mypicture} alt="Logo" className="w-26" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 w-1/2">
          <li><a href="#home" className="active" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleOpen(e, "about")}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
          <li><a href="#gallery" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none " 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[9vh] left-0 w-full bg-black text-white transition-transform duration-300 ease-in-out md:hidden">
          <ul className="flex flex-col items-center gap-10 text-xs pt-10 pb-10">
            <li><a href="#home" className="active" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleOpen(e, "about")}>About</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
            <li><a href="#gallery" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
