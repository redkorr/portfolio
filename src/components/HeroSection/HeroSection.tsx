import React from 'react';

const HeroSection = () => {
  return (
    <div className=" lg:w-1/2 lg:py-10 pt-20">
      <div className="mb-5">
        <span className="text-transparent lg:text-6xl text-5xl font-bold bg-clip-text bg-gradient-to-r from-darkBlue to-neonBlue ">
          Hello, I&#39;m Adam,
        </span>
      </div>
      <div className="mb-9">
        <span className="lg:text-6xl text-5xl font-bold text-white">frontend developer</span>
      </div>
      <div>
        <span className="text-lg text-white">
          Passionate junior frontend developer with a knack for crafting engaging and user-friendly web experiences. My
          goal is to bring creative designs to life through clean and efficient code.
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
