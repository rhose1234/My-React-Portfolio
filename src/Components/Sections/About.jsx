import React from 'react'
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";

export default function About() {
  return (
    <div className='container mt-8 px-3 md:px-30 md:pt-8' id='about'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-y-10 md:gap-x-10'>

        {/* Skills Grid for larger screens - Images on the Left */}
        <div className="hidden md:flex flex-wrap justify-start gap-x-8 gap-y-8 w-1/2">
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
        <div className='w-full md:w-1/2 mt-6 md:mt-0 md:text-left md:ml-auto '>
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-md font-bold'>What You Need To Know</h4>
          </div>
          <p className="text-gray-700 text-start px-3 md:px-0 leading-relaxed tracking-wide">

          I am a Creative Frontend Developer who enjoys bringing ideas to life on the web. I use HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React JS to build clean, responsive, and user-friendly interfaces. <br/> Over time, I’ve gained hands-on experience working on different projects, collaborating with teams, and figuring things out as I go.  <br/>

I recently received the spotlight from the Glovo Women in Tech Bootcamp as the most active participant, which was a big deal for me because I stayed committed until the end. My journey in tech has been filled with learning, challenges, and wins, and I’m always looking for ways to improve and grow.  

<br/>Right now, I’m focused on leveling up my skills and exploring new opportunities. I'm on my journey to becoming a software engineer, and I love working on things that make an impact. I'm excited about what’s next for me in tech.
          
          </p>
        </div>

      </div>
    </div>
  )
}
