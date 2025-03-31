import { Link } from 'react-router-dom';
import vid from '../../images/vid.mp4';

export default function Home() {  
  return (
    <div className="relative h-screen px-2 lg:px-30 pt-28 lg:pt-8 ">
      <div className="container w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-x-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 ">
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h5 className="text-md font-light">The Tech Creative</h5>
          </div>
          <h1 className="font-medium text-2xl lg:text-6xl mb-8">
            Hello! I'm Rose Marvelous
          </h1>
          <p className="font-normal text-md max-w-2xl mb-8">
            I am a Creative Frontend Developer. I help businesses and individuals establish a strong online presence with
            user-friendly and seamless interfaces.
          </p>
          <Link
            to="https://calendly.com/marvelousrhose"
            className="inline-block text-md bg-[#613B26] py-4 px-6 font-bold rounded-xl text-[#DFC6C5]"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 lg:pt-10 md:pt-2 px-6 md:px-0">
          <video autoPlay loop muted className="hero-img rounded-5xl w-full md:w-[68vh] h-auto max-h-[80vh] md:max-h-screen">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
