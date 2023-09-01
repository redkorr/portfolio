import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';

import Links from '../Links/Links';

const Header = () => {
  return (
    <div className=" lg:static fixed w-[84%] lg:w-full bg-dirtyNeonBlue">
      <div className="py-6 lg:py-10 flex lg:justify-between justify-evenly items-center">
        <p className="text-2xl">A.K. portfolio</p>
        <NavigationBar />
        <div className="lg:block hidden">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Header;
