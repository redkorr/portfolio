import React from 'react';

import { ParallaxLayer } from '@react-spring/parallax';

const BackgroundAnimation = () => {
  return (
    <div>
      <ParallaxLayer
        offset={0.56}
        speed={1.5}
      >
        <div className="absolute right-[550px] -inset-y-1/4 w-52 h-52 rounded-full bg-transparent border-neonBlue border"></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.4}
        speed={2.5}
      >
        <div className="absolute right-[580px] -inset-y-1/4 w-72 h-72 rounded-full bg-transparent border-darkBlue border z-10"></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.55}
        speed={1}
      >
        <div className="absolute right-[550px] -inset-y-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-darkBlue to-neonBlue"></div>
      </ParallaxLayer>
    </div>
  );
};

export default BackgroundAnimation;
