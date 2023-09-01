import React from 'react';

const Skills = () => {
  const Skills = ['Quick learning', 'Teamwork', 'Native polish', 'B2 english', 'Time-management', 'Organization'];

  return (
    <div
      id="Skills"
      className="lg:pt-20 pt-10"
    >
      <h2 className="text-4xl font-semibold lg:py-11 py-6">Skills</h2>
      <div className="lg:flex lg:flex-wrap">
        {Skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center lg:w-1/3 text-2xl lg:p-auto pb-3"
          >
            <div className="p-[10px] h-[10px] mr-4 rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue"></div>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
