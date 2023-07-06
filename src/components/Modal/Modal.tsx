import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import NotificationPage from '../../../public/notifications-page-desktop.png';
import CloseBtn from '../../../public/close-bold-svgrepo-com.svg';
import { Project } from '@/types';

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
          <div className="w-fit h-fit m-auto p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue hover:cursor-default">
            <div className="flex h-[500px] mx-auto bg-dirtyNeonBlue p-6 rounded-2xl">
              <Image
                src={`/..${project.projectImage}`}
                alt=""
                width={900}
                height={500}
              />
              <div className="p-3 m-auto w-80 min-h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl leading-none mb-2">{project.name}</h1>
                  <button onClick={handleClick}>
                    <Image
                      className="w-8"
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
                  <p className="max-h-40 overflow-auto">{project.about}</p>
                </div>
                <div className="flex justify-evenly pt-5">
                  <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-2 font-semibold">
                    Code
                  </button>
                  <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-2 font-semibold">
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
