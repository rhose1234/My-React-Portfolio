import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import event1 from '../../images/1.jpg';
import event2 from '../../images/2.jpg';
import event3 from '../../images/3.jpg';
import event4 from '../../images/4.jpg';
import event5 from '../../images/5.jpg';
import event6 from '../../images/6.jpg';
import event7 from '../../images/7.jpg';
import event8 from '../../images/8.jpg';
import event9 from '../../images/9.jpg';
import event10 from '../../images/10.jpg';
import event11 from '../../images/11.jpg';
import event12 from '../../images/12.jpg';
import event13 from '../../images/13.jpg';

const eventImages = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13];

export default function Gallery() {
  return (
    <div className="w-full py-8" id='gallery'>

<div className="mb-0 flex items-center text-center justify-center ">
  {/* Blinking Circles */}
  <div className=" flex items-center justify-center mr-4 mb-3">
    <span className="blinking-circle absolute w-1 h-1"></span>
    <span className="blinking-circle absolute w-2 h-2"></span>
    <span className="blinking-circle absolute w-3 h-3"></span>
  </div>
  
  {/* Heading */}
  <h2 className="text-center text-3xl font-bold mb-12 mt-8">Life As a Developer</h2>
</div>
    
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        speed={800}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {eventImages.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full w-96 h-96 rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
