import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import mypicture from "../../images/logo.png";

export default function Footer() {
  return (
    <footer className="text-black bg-gray-50 py-20 mt-16 px-3 md:px-32 md:pt-16 " id='footer'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left align-left md:text-left">
        {/* Logo and Description */}
        <div>
          {/* Logo */}
          <Link to="/" className="w-1/2">
            <img src={mypicture} alt="Logo" className="w-28" />
          </Link>
          <p className="mt-2 text-sm text-black px-3">Building innovative web solutions to solve real-world problems.</p>
        </div>

        {/* Social Links */}
        <div className='px-3'>
          <h3 className="text-lg font-semibold text-black px-0 md:px-2 ">Connect with me</h3>
          <div className="flex justify-start p-0 m-0  gap-4">
            <Link to="https://x.com/RoseMarvelous4" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full "  target="_blank" rel="noopener noreferrer"><FaXTwitter size={20} /></Link>
            <Link to="https://www.linkedin.com/in/rose-akorede/" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full"  target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></Link>
            <Link to="https://github.com/rhose1234" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full"  target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></Link>
            <Link to="https://www.instagram.com/marvelousrose02/" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full"  target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></Link>
            <Link to="https://web.facebook.com/profile.php?id=100070538305621" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full"  target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></Link>
            <Link to="https://www.tiktok.com/@marvelousrose02?is_from_webapp=1&sender_device=pc" className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full"  target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className='px-3'>
          <h3 className="text-lg font-semibold">Let's Talk</h3>
          <p className="mt-2 text-sm">Schedule a call with me to discuss your project.</p>
          <Link to="https://calendly.com/marvelousrhose" className="inline-block mt-3 px-4 py-2 bg-[#613B26] text-white rounded-lg">Schedule a Call</Link>
        </div>
      </div>
    </footer>
  );
}
