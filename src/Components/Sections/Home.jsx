import { Link } from 'react-router-dom';
import vid from '../../images/vid.mp4';
import mypicture from "../../images/mypic.jpg"
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Home() {  
  return (
    <div id='home' className="relative h-auto md:h-screen px-3 md:px-30 pt-30 md:pt-8 bg-[#F9F6F0] ">
      <div className="container w-full  flex flex-col md:flex-row justify-between items-center gap-x-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 ">
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h5 className="text-md font-light">The Tech Creative</h5>
          </div>
          <h1 className="font-medium text-2xl lg:text-6xl mb-8 leading-tight tracking-normal">
            Hello! I'm Rose Marvelous
          </h1>
          <p className="font-normal text-md max-w-2xl mb-8 leading-relaxed tracking-wide">
            I am a Creative Frontend Developer. I help businesses and individuals establish a strong online presence with
            user-friendly and seamless interfaces.
          </p>
          <div className="inline-flex items-center gap-x-4">
  <Link to="https://github.com/rhose1234" target="_blank" rel="noopener noreferrer">
     <FaGithub className="text-[#613B26]    text-xl " />
  </Link>
  <Link to="https://www.linkedin.com/in/rose-akorede/" target="_blank" rel="noopener noreferrer" >
    <FaLinkedin className="text-[#613B26]   text-xl " />
  </Link>
  <Link to="https://x.com/RoseMarvelous4" target="_blank" rel="noopener noreferrer">
     <FaXTwitter className="text-[#613B26]   text-xl " />
  </Link>
  <Link to="https://www.instagram.com/rosemarvelous_4/" target="_blank" rel="noopener noreferrer">
     <FaInstagram className="text-[#613B26]   text-xl " />
  </Link>
</div>

        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 lg:pt-10 md:pt-2 px-6 md:px-0">
          <video autoPlay loop muted className="hero-img rounded-5xl -full md:w-[68vh] h-auto max-h-[80vh] md:max-h-screenw">
            <source src={vid} type="video/mp4" />
          </video>

          <img src={mypicture} alt="My Picture" className="hero-img w-full md:w-[68vh] h-auto max-h-[80vh] md:max-h-screen"  />
        </div>
      </div>
    </div>
  );
}
