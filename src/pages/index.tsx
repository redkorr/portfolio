import { HeroSection, ProjectsSection } from '@/components';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main className="mx-auto my-5 w-3/5">
      <HeroSection />
      <ProjectsSection
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </main>
  );
}
