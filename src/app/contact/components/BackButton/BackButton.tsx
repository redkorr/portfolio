import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import BackArrow from '../../../../../public/back-arrow-svgrepo-com.svg';

const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="lg:mt-5 mt-1 rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 lg:py-3 py-2 font-semibold"
      >
        <Image
          src={BackArrow}
          width={30}
          height={30}
          alt="arrow pointing back"
        />
      </button>
    </div>
  );
};

export default BackButton;
