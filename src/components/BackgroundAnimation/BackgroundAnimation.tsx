import React from 'react';

import { useParallax } from 'react-scroll-parallax';

const BackgroundAnimation = () => {
  const { ref } = useParallax<HTMLDivElement>({ speed: -10 });
  return (
    <div
      ref={ref}
      className="fixed inset-x-1/2 inset-y-1/4 z-10"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-darkBlue to-neonBlue"></div>
      <div className="w-52 h-52 rounded-full bg-transparent border-neonBlue border"></div>
      <div className="w-80 h-80 rounded-full bg-transparent border-neonBlue border"></div>
    </div>
  );
};

export default BackgroundAnimation;
