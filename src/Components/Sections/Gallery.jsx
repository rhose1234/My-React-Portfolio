import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

// Image imports
import event1 from "../../images/1.jpg";
import event2 from "../../images/2.jpg";
import event3 from "../../images/3.jpg";
import event4 from "../../images/4.jpg";
import event5 from "../../images/5.jpg";
import event6 from "../../images/6.jpg";
import event7 from "../../images/7.jpg";
import event8 from "../../images/8.jpg";
import event9 from "../../images/9.jpg";
import event10 from "../../images/10.jpg";
import event11 from "../../images/11.jpg";
import event12 from "../../images/12.jpg";
import event13 from "../../images/13.jpg";

const eventImages = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
  event8,
  event9,
  event10,
  event11,
  event12,
  event13,
];

function ParallaxRow({ images, baseVelocity = 2 }) { // Significantly reduced base velocity
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 100], [0, 1], { // Reduced max velocity factor
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden parallax  ">
      <motion.div className="flex gap-0 w-max" style={{ x }}>
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Event ${index % images.length + 1}`}
            className="h-100 w-100 object-cover  shadow-sm"
            loading="lazy" 
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const firstRow = eventImages.slice(0, 6);
  const secondRow = eventImages.slice(6, 13); 

  return (
    <section className="  pt-10 md:pt-24" id="gallery">
      <div className="w-full space-y-12 py-14 " id="gallery">
        <div className="mb-12 flex items-center gap-x-5 justify-center">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-3xl font-bold '>Life as a Developer</h4>
          </div>

      
      <ParallaxRow images={firstRow} baseVelocity={-2} />
      <ParallaxRow images={secondRow} baseVelocity={2} />
    </div>
    </section>
  );
}