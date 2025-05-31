import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import mypicture from "../../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-full overflow-x-hidden bg-[#F9F6F0] shadow-xl fixed top-0 w-full z-10 h-auto place-content-center py-6 px-4 lg:px-28 md:px-16">
      <div className="container flex justify-between items-center gap-x-10 lg:gap-x-24 md:gap-x-10">

        {/* Logo */}
        <Link to="/" className="w-1/2">
          <img src={mypicture} alt="Logo" className="w-26" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 w-1/2">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
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
            <li>
              <a href="#home" className="active" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}