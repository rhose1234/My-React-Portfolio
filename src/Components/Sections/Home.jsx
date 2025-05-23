import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import mypicture from "../../images/mypic.jpg";

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
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.5, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function Home() {
  return (
    <div id="home" className="h-screen w-full px-6 md:px-28 pt-6 bg-[#F9F6F0] overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8 items-center ">

        {/* Left Content */}
        <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="mb-6 flex items-center gap-x-3">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2 bg-[#613B26] rounded-full"></span>
              <span className="blinking-circle absolute w-4 h-4 border border-[#613B26] rounded-full"></span>
            </div>
            <h5 className="text-xs font-light text-[#613B26]">The Tech Creative</h5>
          </div>

          <h3 className="font-medium text-2xl lg:text-5xl mb-2 leading-tight tracking-normal">
            Hello! I'm 
          </h3>
          <h2 className="text-black font-medium text-2xl lg:text-6xl mb-2 leading-tight tracking-normal">Rose Marvelous</h2>

          <p className="font-normal text-[14px] max-w-2xl mb-6 leading-relaxed tracking-wide text-black">
            I am a Creative Frontend Developer. with stong background in helping businesses and individuals establish a strong online, responsive, visual appealing and user-friendly online presence
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Rose_Marvelous_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#613B26] text-white rounded-xl font-as shadow-xs hover:bg-transparent hover:border-2 hover:border-[#613B26] hover:text-[#613B26] transition-colors duration-300 inline-block text-center"
          >
            Work with me
          </motion.a>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
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
              className="w-100vh h-[95vh] mt-8"
            />
          </motion.div>
        </motion.div>
      </div>

   

    </div>
  );
}
