'use client';

import Link from 'next/link';

import React, { useState } from 'react';

import Image from 'next/image';

import BurgerBtn from '../../../public/burger-menu-svgrepo-com.svg';

import CloseBtn from '../../../public/close-bold-svgrepo-com.svg';

const NavigationBar = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <div className="flex items-center z-10">
      <div className="lg:flex items-center hidden">
        <div className="text-xl px-8">
          <Link
            href="#ProjectsSection"
            scroll={false}
          >
            <button>Project Section</button>
          </Link>
        </div>
        <div className="text-xl mx-8">
          <Link
            href="#Technologies"
            scroll={false}
          >
            <button>Technologies</button>
          </Link>
        </div>
        <div className="text-xl mx-8">
          <Link
            href="#Skills"
            scroll={false}
          >
            <button>Skills</button>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex">
        <button onClick={() => setNavBar(!navBar)}>
          {navBar ? (
            <Image
              src={CloseBtn}
              width={30}
              height={30}
              alt="close button"
            />
          ) : (
            <Image
              src={BurgerBtn}
              width={30}
              height={30}
              alt="burger button"
            />
          )}
        </button>
        <div className={`absolute inset-y-20 inset-x-0 z-10 bg-dirtyNeonBlue h-52 ${navBar ? '' : 'hidden'}`}>
          <div className="flex justify-evenly flex-col text-center content-around h-full">
            <div className="text-2xl mx-8">
              <Link
                href="#HeroSection"
                scroll={false}
                onClick={() => setNavBar(!navBar)}
              >
                <button>HeroSection</button>
              </Link>
            </div>
            <div className="text-2xl mx-8">
              <Link
                href="#ProjectsSection"
                scroll={false}
                onClick={() => setNavBar(!navBar)}
              >
                <button>Project Section</button>
              </Link>
            </div>
            <div className="text-2xl mx-8">
              <Link
                href="#Technologies"
                scroll={false}
                onClick={() => setNavBar(!navBar)}
              >
                <button>Technologies</button>
              </Link>
            </div>
            <div className="text-2xl mx-8">
              <Link
                href="#Skills"
                scroll={false}
                onClick={() => setNavBar(!navBar)}
              >
                <button>Skills</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
