import { useRouter } from 'next/navigation';
import React from 'react';

const ThankYouState = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col w-4/5 h-1/3 p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue lg:w-1/3 2xl:h-1/3">
      <div className="h-full bg-dirtyNeonBlue rounded-2xl flex flex-col justify-center content-center p-2">
        <h1 className="text-3xl text-center font-semibold mb-5 lg:text-4xl">Thank You for contacting me</h1>
        <p className="text-center mb-5">I will respond as soon as possible.</p>
        <button
          onClick={handleClick}
          className="w-4/5 rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold mx-auto lg:w-3/5 shadow-md hover:shadow-lg hover:shadow-blue-500/50 shadow-blue-500/50 active:shadow-none"
        >
          Back to portfolio
        </button>
      </div>
    </div>
  );
};

export default ThankYouState;
