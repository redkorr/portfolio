import React from 'react';

const Technologies = () => {
  const Technologies = ['React', 'Typescript', 'Git', 'Javascript', 'HTML', 'Tailwind', 'CSS'];

  return (
    <div
      id="Technologies"
      className=" py-10"
    >
      <h2 className="text-4xl font-semibold py-11">Technologies</h2>
      <div className="flex flex-wrap">
        {Technologies.map((technology) => (
          <div
            key={technology}
            className="flex items-center w-1/3 text-2xl p-auto"
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
