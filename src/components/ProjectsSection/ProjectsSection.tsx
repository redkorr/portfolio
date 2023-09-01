'use client';

import Image from 'next/image';

import useApiGET from '@/hooks/useApiGET';

import { Project } from '../../types';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectsSection = () => {
  const projects = useApiGET('/projects');

  const [data, setData] = useState<Array<Project> | undefined>(undefined);

  const [buttonId, setButtonId] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setData(projects);
  }, [projects]);

  return (
    <div
      id="ProjectsSection"
      className="lg:pt-20 pt-10"
    >
      <h2 className="text-4xl font-semibold lg:py-11 py-6">Projects</h2>
      <div className="flex flex-wrap gap-4">
        {data?.map((project) => (
          <div
            className="p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue lg:w-[49%]"
            key={project.id}
          >
            <div className="bg-dirtyNeonBlue p-6 rounded-2xl">
              <div>
                <Image
                  src={`/..${project.projectImage}`}
                  alt=""
                  className="lg:h-[260px] h-32"
                  width={512}
                  height={260}
                />
                <div>
                  <h3 className="lg:text-2xl text-xl lg:py-7 py-4 text-center">{project.name}</h3>
                </div>
                <div className="flex justify-center">
                  <button
                    className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold"
                    onClick={() => {
                      setIsModalOpen(true);
                      setButtonId(project.id);
                    }}
                  >
                    View project
                  </button>
                </div>
              </div>
            </div>
            <Modal
              buttonId={buttonId}
              project={project}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
