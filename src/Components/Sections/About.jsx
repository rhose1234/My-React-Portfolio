import React from 'react'
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";
import git from "../../images/git.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function About() {
  return (
    <div className=' max-w-full overflow-x-hidden container mx-auto  px-3 md:px-16 lg:pt-24 lg:px-24 pt-10 md:pt-16 ' id='about'>
      <div className="grid grid-cols-1 md:grid-cols-2  relative gap-x-10 gap-y-6">

        {/* Skills Grid for larger screens - Images on the Left */}
        <div className="hidden md:grid grid-cols-3 gap-4 w-full" data-aos="zoom-in-right">
          {[html, css, js, bootstrap, react, tailwind, git].map((src, index) => (
            <img key={index} src={src} className="w-28" alt="tech-logo"/>
          ))}
        </div>

        {/* Marquee for smaller screens */}
        <div className="relative overflow-hidden w-full md:hidden">
          <div className="animate-marquee flex flex-row gap-x-6">
            {[html, css, js, bootstrap, react, tailwind, git, html, css, js, bootstrap, react, tailwind, git].map((src, index) => (
              <img key={index} src={src} className="w-28 md:w-32" alt="techskills-logo"/>
            ))}
          </div>
        </div>

        {/* About Text - Text on the Right (Desktop) and First (Mobile) */}
        <div className='w-full  mt-6 md:mt-0 md:text-left md:ml-auto' data-aos="zoom-in-left">
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-2xl font-bold md:text-start lg:text-start text-center'>What You Need To Know</h4>
          </div>
          <p className="text-gray-900 text-sm text-start px-3 w-auto md:px-0  leading-relaxed tracking-wide">
            I’m a Creative Frontend Developer passionate about turning ideas into web solutions. I use HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React JS to create responsive, user-friendly interfaces.

            With hands-on experience across various projects, I’ve collaborated with teams and embraced challenges along the way. Recently, I was honored as the most active participant in the Glovo Women in Tech Bootcamp for my commitment.

            Currently, I’m focused on enhancing my skills and pursuing new opportunities in software engineering, excited about making a meaningful impact in tech.
          </p>
        </div>

      </div>
    </div>
  )
}
