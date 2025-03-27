import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger & Close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full z-40 h-[12vh] md:h-[14vh] shadow-lg flex justify-center items-center">
      <div className="!container !mx-auto  w-full  !px-6 lg:px-32 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex items-center w-1/2">
          <span className="loading-dots">
            <span></span>
            <span></span>
          </span> Marvelous
        </Link>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden md:flex !space-x-10 text-lg text-black  left-0 right-0  w-1/2">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        {/* Mobile Menu Button (Right) */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Starts exactly under navbar) */}
      <div
        className={`fixed top-[12vh] md:top-[14vh] left-0 w-full bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center !space-y-6 text-lg !py-10">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
