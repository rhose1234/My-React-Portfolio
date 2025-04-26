import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
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
      dataAos: "fade-up"
    },
    {
      id: 2,
      name: "CK-Designs",
      desktopImg: project2Desktop,
      mobileImg: project2Mobile,
      description: "I built a personal and brand portfolio for Kelvin, a brand strategist. The project showcases his work and was built using HTML, CSS, JavaScript, and Bootstrap.",
      link: "https://ckdesigns.com.ng/",
      dataAos: "fade-right"
    },
    {
      id: 3,
      name: "MovieBox",
      desktopImg: project3Desktop,
      mobileImg: project3Mobile,
      description: "A movie website built for HNGx Task 3, where I explored implementing React.js and Tailwind CSS to create a seamless user experience.",
      link: "https://hng-task-2-gules.vercel.app/",
      dataAos: "fade-left"
    },
    {
      id: 4,
      name: "SendPal",
      desktopImg: project4Desktop,
      mobileImg: project4Mobile,
      description: "I collaborated with the team at CurlBack Inc. to develop the landing page and some other pages for SendPal, an e-commerce platform for sending gifts. Built with React.js and Tailwind CSS.",
      link: "https://sendpal.pages.dev/",
      dataAos: "fade-up"
    }
  ];

  return (
    <div className="container mx-auto px-3 md:px-10 pt-30 md:pt-30" id="projects">
      {/* Heading */}
      <div className="mb-10 flex items-center gap-x-5 justify-center">
        <div className="relative flex items-center mr-3">
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-4 h-4"></span>
        </div>
        <h4 className="text-2xl font-bold">Projects I Have Worked On</h4>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">

        {projects.map((project) => (
          <div key={project.id} className="bg-[#F9F6F0] shadow-sm p-8 pt-12 rounded-lg" data-aos={project.dataAos}>
            <div className="flex justify-center gap-2 mb-6">
              <img src={project.desktopImg} alt={`${project.name} Desktop`} className="w-80 md:w-[400px]" />
              <img src={project.mobileImg} alt={`${project.name} Mobile`} className="w-28 hidden md:block" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:text-[#BB8E5A] inline-flex items-center mt-4 transition-all"
            >
              View Project
              <FaExternalLinkAlt className="ml-2 text-sm" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
