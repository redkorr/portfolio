import React from 'react';

import Image from 'next/image';

import GithubIcon from '../../../public/github-icon.svg';

import LinkedinIcon from '../../../public/linedin-icon.svg';

const Links = () => {
  return (
    <div className="flex">
      <a
        href="https://github.com/redkorr"
        target="_blank"
        className="m-2"
      >
        <Image
          src={GithubIcon}
          className="w-7"
          alt=""
        />
      </a>
      <a
        href="https://www.linkedin.com/in/akemicer/"
        target="_blank"
      >
        <Image
          src={LinkedinIcon}
          className="w-11"
          alt=""
        />
      </a>
    </div>
  );
};

export default Links;
