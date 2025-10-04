import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import mypicture from "../../images/logo.png";

export default function Footer() {
  return (
    <footer className=" max-w-full overflow-x-hidden bg-gray-50 text-black py-16 mt-10 px-5 lg:px-30 md:px-20" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img src={mypicture} alt="Logo" className="w-28" />
          </Link>
          <p className="text-sm leading-relaxed">Building innovative web solutions to solve real-world problems.</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Connect with me</h3>
          <div className="flex flex-wrap space-x-2">
            <Link to="https://x.com/RoseMarvelous4" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaXTwitter size={20} />
            </Link>
            <Link to="https://www.linkedin.com/in/rose-marvelous/" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaLinkedin size={20} />
            </Link>
            <Link to="https://github.com/rhose1234" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaGithub size={20} />
            </Link>
            <Link to="https://www.instagram.com/marvelousrose02/" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaInstagram size={20} />
            </Link>
            <Link to="https://web.facebook.com/profile.php?id=100070538305621" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaFacebook size={20} />
            </Link>
            <Link to="https://www.tiktok.com/@marvelousrose02" target="_blank" rel="noopener noreferrer" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition">
              <FaTiktok size={20} />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Let's Talk</h3>
          <p className="text-sm leading-relaxed">Schedule a call with me to discuss your project.</p>
          <Link 
            to="https://calendly.com/marvelousrhose" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-2 px-5 py-2.5 bg-[#613B26] text-white rounded-lg hover:bg-[#BB8E5A] transition"
          >
            Schedule a Call
          </Link>
        </div>

      </div>
    </footer>
  )
}
