import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {
  return (
    <div className="py-10 flex">
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
  );
};

export default NavigationBar;
