import React from 'react';
import mypic from '../../images/mypic.jpg';
import { Link } from 'react-router-dom';
import vid from '../../images/vid.mp4';
export default function Home() {  
  return (
    <div className=' flex items-center h-screen '>
    <div className='!container !mx-auto lg:!flex-row md:flex-column !flex !justify-between !items-center !px-6 lg:px-32'>
      <div className='w-1/2'>

      <div className=" !mb-4 flex items-center gap-x-5">
  <div className="relative flex items-center mr-3">
    <span className="blinking-circle absolute w-2 h-2"></span>
    <span className="blinking-circle absolute w-4 h-4"></span>
  
  </div>
  <h5 className='text-md font-light'>The Tech Creative</h5>
</div>
<h1 className='font-medium text-7xl !mb-4'>Hello! I'm Rose Marvelous </h1>
<p className='font-normal text-xl text-start max-w-2xl !mb-16'>I am a Creative Frontend Developer. I help businesses and 
individuals establish a strong online presence with  user-friendly  and  seamless interfaces.</p>

<Link to='https://calendly.com/marvelousrhose' className='!mt-32 text-md bg-[#613B26] !py-4 !px-4 font-bold rounded text-[#DFC6C5]'>Schedule a Call</Link>

</div>
     <div className='w-1/2 !pt-[160px]'>
{/* <img src={mypic} alt='mypic' className='hero-img rounded-5xl w-[68vh] !h-[80vh]'/> */}
<video autoPlay loop muted className='hero-img rounded-5xl w-[68vh] !h-screen'>
  <source src={vid} type='video/mp4'/>
</video>
     </div>
</div>
    </div>
  );
}
