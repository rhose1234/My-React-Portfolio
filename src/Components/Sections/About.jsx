import React from 'react'
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function About() {
  return (
    <div className='container  px-3 md:px-10 md:pt-24 h-auto md:h-80vh ' id='about'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-y-10 md:gap-x-28'>

        {/* Skills Grid for larger screens - Images on the Left */}
        <div className="hidden md:flex flex-wrap justify-start gap-x-8 gap-y-8 w-1/2" data-aos="zoom-up-down">
          {[html, css, js, bootstrap, react, tailwind].map((src, index) => (
            <img key={index} src={src} className="w-32" alt="tech-logo"/>
          ))}
        </div>

        {/* Marquee for smaller screens */}
        <div className="relative overflow-hidden w-full md:hidden">
          <div className="animate-marquee flex flex-row gap-x-8 ">
            {[html, css, js, bootstrap, react, tailwind, html, css, js, bootstrap, react, tailwind].map((src, index) => (
              <img key={index} src={src} className="w-28 md:w-32" alt="techskills-logo"/>
            ))}
          </div>
        </div>

        {/* About Text - Text on the Right (Desktop) and First (Mobile) */}
        <div className='w-full md:w-1/2 mt-6 md:mt-0 md:text-left md:ml-auto' data-aos="fade-down">
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-md font-bold'>What You Need To Know</h4>
          </div>
          <p className="text-gray-700 text-start px-3 w-[470px] md:px-0 leading-relaxed tracking-wide">

          I’m a Creative Frontend Developer passionate about turning ideas into web solutions. I use HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React JS to create responsive, user-friendly interfaces.

          With hands-on experience across various projects,I’ve collaborated with teams and embraced challenges along the way.  Recently, I was honored as the most active participant in the Glovo Women in Tech Bootcamp for my commitment.

          Currently, I’m focused on enhancing my skills and pursuing new opportunities in software engineering, excited about making a meaningful impact in tech.
          
          </p>
        </div>

      </div>
    </div>
  )
}
