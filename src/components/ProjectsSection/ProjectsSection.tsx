import React from 'react';

import Image from 'next/image';

import CardDetails from '../../../public/interactive_card_details_form.png';

import GithubProfileApp from '../../../public/github_profile_app.png';

import NotificationPage from '../../../public/notifications-page-desktop.png';

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold py-11">Projects</h2>
      <div className="flex flex-wrap gap-4">
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue w-[49%]">
          <div className="bg-dirtyNeonBlue p-6 rounded-2xl">
            <div>
              <Image
                src={CardDetails}
                alt=""
                className="h-[260px]"
              />
              <div>
                <h3 className="text-2xl py-7 text-center">Interactive card details form</h3>
              </div>
              <div className="flex justify-center">
                <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold">
                  View project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue w-[49%]">
          <div className="bg-dirtyNeonBlue p-6 rounded-2xl">
            <div>
              <Image
                src={GithubProfileApp}
                alt=""
                className="h-[260px]"
              />
              <div>
                <h3 className="text-2xl py-7 text-center">Github profile app</h3>
              </div>
              <div className="flex justify-center">
                <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold">
                  View project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[1px] rounded-2xl bg-gradient-to-r from-darkBlue to-neonBlue w-[49%]">
          <div className="bg-dirtyNeonBlue p-6 rounded-2xl">
            <div>
              <Image
                src={NotificationPage}
                alt=""
                className="h-[260px]"
              />
              <div>
                <h3 className="text-2xl py-7 text-center">Notifiacations page</h3>
              </div>
              <div className="flex justify-center">
                <button className="rounded-3xl bg-gradient-to-r from-darkBlue to-neonBlue px-7 py-3 font-semibold">
                  View project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
