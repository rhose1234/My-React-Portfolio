import React from 'react'
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/react.png";
import tailwind from "../../images/tailwind.png";





export default function About() {
  return (
    <div className='container mt-16 px-2 lg:px-30 lg:pt-8 ' id='about'>
    <div className='flex flex-col justify-betwen md:flex-row'>

{/* Grid layout for larger screens */}
<div className="hidden md:grid grid-cols-2 gap-x-2 gap-y-4 w-1/2">
  <img src={html} className="w-40" alt="html-logo"/>
  <img src={css} className="w-40" alt="css-logo"/>
  <img src={js} className="w-40" alt="javascript-logo"/>
  <img src={bootstrap} className="w-40" alt="bootstrap-logo"/>
  <img src={react} className="w-40" alt="react-logo"/>
  <img src={tailwind} className="size-38" alt="tailwind-logo"/>
</div>

<div className="relative overflow-hidden w-full md:hidden">
  <div className="animate-marquee flex flex-row gap-x-8">
    {/* Duplicate images for a seamless loop */}
    {[html, css, js, bootstrap, react, tailwind, html, css, js, bootstrap, react, tailwind].map((src, index) => (
      <img key={index} src={src} className="w-40" alt="tech-logo"/>
    ))}
  </div>
</div>

      <div className='w-1/2'>

      <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
        <h4 className='text-xl font-medium'>What You Need To Know</h4>
        <p>
        </p>
        </div>
        <p> jvbbjln mn</p>
      </div>
    </div>

      
    </div>
  )
}
