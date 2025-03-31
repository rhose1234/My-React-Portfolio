import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import mypicture from "../../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full z-10 h-[12vh] shadow-lg place-content-center px-2 lg:px-28  ">
  <div className="container mx-auto flex justify-between items-center  ">
    
    {/* Logo */}
    <Link to="/" className="w-32">
      <img src={mypicture} alt="Logo" className="w-full" />
    </Link>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-10 text-lg text-black">
      <li><Link to="/" className="active">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/projects">Projects</Link></li>
    </ul>

    {/* Mobile Menu Button */}
    <button 
      className="md:hidden text-black focus:outline-none" 
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`fixed top-[12vh] md:top-[14vh] left-0 w-full bg-black  text-white transition-transform duration-300 ease-in-out md:hidden ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <ul className="flex flex-col items-center gap-10 text-lg pt-10 pb-10">
      <li><Link to="/" className="active" onClick={() => setIsOpen(false)}>Home</Link></li>
      <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
      <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
    </ul>
  </div>
</nav>

  );
}
