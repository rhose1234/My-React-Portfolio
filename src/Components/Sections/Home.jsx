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
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function Home() {
  return (
    <div id='home' className="overflow-hidden h-screen w-full px-3 pt-16 md:pt-16 bg-[#F9F6F0] bg-[url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')]">
      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:px-6 lg:px-10 py-20 relative">

        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#e9c9a7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-5 w-72 h-72 bg-[#d4b692] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        {/* Left Content */}
        <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          <div className="mb-4 flex items-center mt-4 gap-x-2">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2 bg-[#613B26] rounded-full"></span>
              <span className="blinking-circle absolute w-4 h-4 border border-[#613B26] rounded-full"></span>
            </div>
            <h5 className="text-md font-light text-gray-600">The Tech Creative</h5>
          </div>
          <h1 className="font-medium text-2xl lg:text-6xl mb-6 leading-tight tracking-normal">
            Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#613B26] to-[#d4a373]">Rose Marvelous</span>
          </h1>
          <p className="font-normal text-md max-w-2xl mb-6 leading-relaxed tracking-wide text-gray-700">
            I am a Creative Frontend Developer. I help businesses and individuals establish a strong online presence with
            user-friendly and seamless interfaces.
          </p>

          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/resume.pdf" 
  download="Rose_Marvelous_CV.pdf"
  target="_blank" 
  rel="noopener noreferrer"
  className="px-8 py-3 bg-[#613B26] text-white rounded-xl font-medium shadow-xs hover:bg-transparent hover:border hover:border-2 hover:border-[#613B26] hover:text-[#613B26] transition-colors duration-300 inline-block text-center"
>
  Work with me
</motion.a>

        </motion.div>

        {/* Right Content */}
        <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
         
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={mypicture} 
              alt="My Picture" 
              className="transition-shadow duration-300 w-full h-100vh w-full object-cover rounded-2xl mt-4 md:mt-0"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Blob Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
