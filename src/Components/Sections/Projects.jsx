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
import project5Mobile from "../../images/project5-mobile.png";
import project5Desktop from "../../images/project5-desktop.png";
import project6Mobile from "../../images/project6-mobile.png";
import project6Desktop from "../../images/project6-desktop.png";
import project7Desktop from "../../images/project7-desktop.png";
import project7Mobile from "../../images/project7-mobile.png";

import { VscGithub } from "react-icons/vsc";
import { HiMiniLink } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  const projects = [
    {
      id: 7,
      name: "Mesktomolog",
      desktopImg: project7Desktop,
      mobileImg: project7Mobile,
     technology: "React JS + Tailwind CSS",

      description: "This is a multi-page logistics website built for Mesktomo Logistics. It showcases the company’s services and allows users to book quotes and track their goods.",
      link: "https://mesktomolog.com/",
      code : "https://github.com/rhose1234/Mesktomo",
      dataAos: "zoom-in-up"
    },
    {
      id: 5,
      name: "DebtKnights",
      desktopImg: project5Desktop,
      mobileImg: project5Mobile,
      description: "This is a one page website with contact form for an international startup company that helps relief debts.",
      technology: "React JS + Tailwind CSS",
      link: "https://debtknights.com/",
      code : "https://github.com/rhose1234/DebtKnight",
      dataAos: "zoom-in-down"
    },
    {
      id: 1,
      name: "BeauteCrate",
      desktopImg: project1Desktop,
      mobileImg: project1Mobile,
      description: "An e-commerce platform offering beauty products as a subscription service.",
      link: "https://beautecrate.netlify.app/",
      code : "https://github.com/rhose1234/BeauteCrate",
      dataAos: "fade-up",
      technology: "HTML + CSS + JavaScript + Localstorage"
    },
     {
      id: 6,
      name: "Tour Guide",
      desktopImg: project6Desktop,
      mobileImg: project6Mobile,
      description: "A responsive, clean travel website with user authentication, trip search, booking, Google Maps integration, and profile management.",
      technology: "HTML + CSS + JavaScript + Localstorage",
      link: "https://tourguided.netlify.app/",
      code : "https://github.com/rhose1234/tour-guide",
      dataAos: "fade-down"
    },
    {
      id: 2,
      name: "CK-Designs",
      desktopImg: project2Desktop,
      mobileImg: project2Mobile,
      description: "A personal and brand portfolio for a brand strategist.",
      link: "https://ckdesigns.vercel.app/",
      code: "https://github.com/rhose1234/ckdesigns",
      dataAos: "fade-right",
      technology : "HTML + CSS + JavaScript + Bootstrap"	
    },
    {
      id: 3,
      name: "MovieBox",
      desktopImg: project3Desktop,
      mobileImg: project3Mobile,
      description: "A movie website built during HNGx Task 3, Fetched the movie data from the TMDB API.",
      technology: "React JS + Tailwind CSS + TMDB API",
      link: "https://hng-task-2-gules.vercel.app/",
      code: "https://github.com/rhose1234/hng-task-2",
      dataAos: "fade-left"
    },
    {
      id: 4,
      name: "CheeseCake",
      desktopImg: project4Desktop,
      mobileImg: project4Mobile,
      description: "This is a fully responsive landing page for a cheesecake bakery business.",
      technology: "React JS + Tailwind CSS",
      link: "https://cheesecakers.netlify.app/",
      code : "https://github.com/rhose1234/cheesecake",
      dataAos: "zoom-in-up"
    },
    
    
     
  ];

  return (
    <div className="max-w-full max-h-100vh overflow-x-hidden container mx-auto px-3 lg:px-24 md:px-28 pt-24 md:pt-24" id="projects">
      {/* Heading */}
      <div className="mb-16 flex items-center gap-x-5 justify-start lg:justify-center md:justify-center">
        <div className="relative flex items-center mr-3">
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-4 h-4"></span>
        </div>
        <h4 className="lg:text-3xl md:text-2xl text-2xl font-bold">Projects I Have Worked On</h4>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">

        {projects.map((project) => (
          <div key={project.id} className="bg-[#F9F6F0] shadow-sm px-8 mt-12 py-10 rounded-lg" >
            <div className="flex justify-start gap-2 mb-6" data-aos={project.dataAos}>
              <img src={project.desktopImg} alt={`${project.name} Desktop`} className="w-80 md:w-[370px]" />
              <img src={project.mobileImg} alt={`${project.name} Mobile`} className="w-28 hidden md:block" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-black leading-relaxed mb-4">{project.description}</p>
            <p className="text-sm text-gray-900 leading-relaxed mb-4 font-semibold">{project.technology}</p>

            <div className="flex gap-4 mt-4">
  <a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#613B26] hover:text-[#BB8E5A] inline-flex items-center transition-all text-sm"
  >
    Code <VscGithub className="ml-1 text-sm" />
  </a>

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#613B26] hover:text-[#BB8E5A] inline-flex items-center transition-all text-sm cursor-pointer"
  >
    View <HiMiniLink className="ml-1 text-sm" />
  </a>
</div>
            </div>
        ))}
      </div>
    </div>
  );
}