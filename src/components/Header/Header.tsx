import React from 'react';

import NavigationBar from '../NavigationBar/NavigationBar';

import Links from '../Links/Links';

const Header = () => {
  return (
    <div className="py-10 flex justify-between items-center">
      <p className="text-2xl">A.K. portfolio</p>
      <NavigationBar />
      <Links />
    </div>
  );
};

export default Header;
