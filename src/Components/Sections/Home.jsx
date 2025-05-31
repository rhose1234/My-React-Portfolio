import React from 'react';
import { motion } from 'framer-motion';
import mypicture from "../../images/mypic.png";
import 'animate.css';


// Animation variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.2,
        delay: delay,
        ease: [0.5, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function Home() {
  return (
    <div id="home" className="h-screen w-full px-4 md:px-16 lg:px-28 pt-6 bg-[#F9F6F0] max-w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-6 py-8 items-center justify-center md:justify-between md:items-center lg:justify-between">

        {/* Left Content */}
        <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2"
        >
          <div className="mb-6 flex items-center gap-x-3 md:mt-0 lg:mt-0 mt-10">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2 bg-[#613B26] rounded-full"></span>
              <span className="blinking-circle absolute w-4 h-4 border border-[#613B26] rounded-full"></span>
            </div>
            <h5 className="text-xs font-light text-[#613B26]">The Tech Creative</h5>
          </div>

          <h3 className="font-medium text-2xl lg:text-5xl mb-2 leading-tight tracking-normal">
            Hello! I'm 
          </h3>

          <h2
            className="hover:animate__heartBeat text-black font-medium text-4xl lg:text-6xl mb-2 leading-tight tracking-normal cursor-pointer"
          >
            Rose Marvelous
          </h2>

          <p className="font-normal text-[14px] max-w-2xl mb-6 leading-relaxed tracking-wide text-black">
            A Creative Frontend Developer with a strong background in helping businesses and individuals build responsive, visually appealing, and user-friendly online presences.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/Marvelous_Rose_Resume.pdf"
              download="Rose_Marvelous_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#613B26] text-white rounded-xl font-medium shadow-xl hover:bg-transparent hover:border-2 hover:border-[#613B26] hover:text-[#613B26] transition-colors duration-300 inline-block text-center"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img 
              src={mypicture}
              alt="Marvelous Rose"
              className="w-full max-w-xs h-auto mt-14 lg:max-w-[520px] md:max-w-[400px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}