import React from 'react';

const Skills = () => {
  const Skills = ['Quick learning', 'Teamwork', 'Native polish', 'B2 english', 'Time-management', 'Organization'];

  return (
    <div
      id="Skills"
      className=" py-10"
    >
      <h2 className="text-4xl font-semibold py-11">Skills</h2>
      <div className="flex flex-wrap">
        {Skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center w-1/3 text-2xl p-auto"
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
