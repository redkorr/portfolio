import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import CloseBtn from '../../../public/close-bold-svgrepo-com.svg';
import { Project } from '@/types';
import Link from 'next/link';

interface Props {
  buttonId: number;
  project: Project;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isModalOpen, setIsModalOpen, project, buttonId }: Props) => {
  const handleClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {buttonId === project.id && isModalOpen && (
        <div className="w-[100vw] h-[100vh] fixed inset-0 flex bg-sky-900/50 hover:cursor-not-allowed">
          <div className="lg:w-fit w-11/12 lg:h-fit h-fit m-auto p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue hover:cursor-default">
            <div className="flex flex-col lg:flex-row lg:h-[500px] h-fit mx-auto bg-dirtyNeonBlue p-6 rounded-2xl">
              <Image
                src={`/..${project.projectImage}`}
                alt=""
                width={900}
                height={500}
              />
              <div className="p-3 m-auto lg:w-80 w-fit min-h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h1 className="lg:text-2xl text-xl leading-none mb-2">{project.name}</h1>
                  <button onClick={handleClick}>
                    <Image
                      className="lg:w-8 w-6"
                      src={CloseBtn}
                      alt=""
                    />
                  </button>
                </div>
                <div className="flex flex-wrap">
                  {project.stack.map((technology) => (
                    <div
                      className="p-[1px] rounded-xl bg-gradient-to-r from-darkBlue to-neonBlue m-1"
                      key={technology}
                    >
                      <div className="font-semibold bg-dirtyNeonBlue p-2 rounded-xl">{technology}</div>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl">About</h2>
                <div>
                  <p className="lg:max-h-40 max-h-24 overflow-auto">{project.about}</p>
                </div>
                <div className="flex justify-evenly pt-5">
                  <Link
                    href={project.link}
                    target="_blank"
                  >
                    <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-2 font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/50 shadow-blue-500/50 active:shadow-none">
                      Code
                    </button>
                  </Link>
                  <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-2 font-semibold shadow-md hover:shadow-lg hover:shadow-blue-500/50 shadow-blue-500/50 active:shadow-none">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
