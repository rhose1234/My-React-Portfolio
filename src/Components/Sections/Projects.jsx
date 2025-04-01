import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import icon
import project1Desktop from "../../images/project1-desktop.png";
import project1Mobile from "../../images/project1-mobile.png";
import project2Desktop from "../../images/project2-desktop.png";
import project2Mobile from "../../images/project2-mobile.png";
import project3Desktop from "../../images/project3-desktop.png";
import project3Mobile from "../../images/project3-mobile.png";
import project4Desktop from "../../images/project4-desktop.png";
import project4Mobile from "../../images/project4-mobile.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "BeauteCrate",
      desktopImg: project1Desktop,
      mobileImg: project1Mobile,
      description: "An e-commerce platform offering beauty products as a subscription service. Built using HTML, CSS, and JavaScript to ensure a seamless shopping experience.",
      link: "https://beautecrate.netlify.app/",
    },
    
    {
      id: 2,
      name: "CK-Designs",
      desktopImg: project2Desktop,
      mobileImg: project2Mobile,
      description: "I built a personal and brand portfolio for Kelvin, a brand strategist. The project showcases his work and was built using HTML, CSS, JavaScript, and Bootstrap.",
      link: "https://ckdesigns.com.ng/",
    },
    
{
  id: 3,
  name: "MovieBox",
  desktopImg: project3Desktop,
  mobileImg: project3Mobile,
  description: "A movie website built for during HNGx Task 3, where I explored implementing React.js and Tailwind CSS to create a seamless user experience.",
  link: "https://hng-task-2-gules.vercel.app/",
},

    {
      "id": 4,
      "name": "SendPal",
      "desktopImg": project4Desktop,
      "mobileImg": project4Mobile,
      "description": "I collaborated with the team at CurlBack Inc. to develop the landing page and some other pages for SendPal, an e-commerce platform for sending gifts. Built with React.js and Tailwind CSS.",
      "link": "https://sendpal.pages.dev/"
    }
    
  ];

  return (
    <div className="container mx-auto py-16 px-6 md:px-24" id="projects">
      <h2 className="text-center text-3xl font-bold mb-12">What I Have Worked on</h2>

      {/* Grid Layout (1 column on small screens, 2 on md, and 2 on lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg p-10  w-auto rounded-lg">
            

            {/* Images */}
            <div className="flex justify-center gap-1 md:gap-2 mb-10 px-1 md:px-10">
              <img src={project.desktopImg} alt={`${project.name} Desktop`} className="w-80 md:w-100  " />
              <img src={project.mobileImg} alt={`${project.name} Mobile`} className="w-28 hidden md:flex " />
            </div>
            <h3 className="text-md font-bold mb-2">{project.name}</h3>

            <p className="mt-2 text-sm text-start tracking-wide leading-relaxed  text-black">{project.description}</p>

            {/* View Project Button with Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-[#613B26] hover:text-[#BB8E5A ] transition-all"
            >
              View Project
              <FaExternalLinkAlt className="ml-2 text-sm " />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
