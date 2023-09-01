import React from 'react';

const Technologies = () => {
  const Technologies = ['React', 'Typescript', 'Git', 'Javascript', 'HTML', 'Tailwind', 'CSS'];

  return (
    <div
      id="Technologies"
      className="lg:pt-20 pt-10"
    >
      <h2 className="text-4xl font-semibold lg:py-11 py-6">Technologies</h2>
      <div className="lg:flex lg:flex-wrap">
        {Technologies.map((technology) => (
          <div
            key={technology}
            className="flex items-center lg:w-1/3 text-2xl lg:p-auto pb-3"
          >
            <div className="p-[10px] h-[10px] mr-4 rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue"></div>
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
