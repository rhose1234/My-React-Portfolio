import React from 'react';
import mypic from '../../images/mypic.jpg';
import { Link } from 'react-router-dom';
import vid from '../../images/vid.mp4';
export default function Home() {  
  return (
    <div className="flex items-center h-screen px-4 md:px-24 lg:px-32">
  <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
    {/* Left Content */}
    <div className="w-full md:w-1/2 mt-16 md:mt-[100px] text-center md:text-left px-6 md:px-0">
      <div className="mb-4 flex items-center gap-x-5">
        <div className="relative flex items-center mr-3">
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-4 h-4"></span>
        </div>
        <h5 className="text-md font-light">The Tech Creative</h5>
      </div>
      <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl mb-8">Hello! I'm Rose Marvelous</h1>
      <p className="font-normal text-md max-w-2xl mb-8 md:mb-16 px-4 md:px-0">
        I am a Creative Frontend Developer. I help businesses and individuals establish a strong online presence with
        user-friendly and seamless interfaces.
      </p>
      <Link
        to="https://calendly.com/marvelousrhose"
        className="inline-block text-md bg-[#613B26] py-4 px-6 font-bold rounded text-[#DFC6C5]"
      >
        Schedule a Call
      </Link>
    </div>

    {/* Right Content */}
    <div className="w-full md:w-1/2 pt-10 md:pt-[150px] px-6 md:px-0">
      <video autoPlay loop muted className="hero-img rounded-5xl w-full md:w-[68vh] h-auto md:h-screen">
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  </div>
</div>

  );
}
