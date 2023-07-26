import React from 'react';

import Link from 'next/link';

import Links from '../Links/Links';

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-darkBlue to-neonBlue">
        <Link href="">Feel free to cantact me</Link>
      </div>
      <div>
        <a>adamkemicer@gmail.com</a>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Footer;
