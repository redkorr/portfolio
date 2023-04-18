import { HeroSection, ProjectsSection } from '@/components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="mx-auto my-5 w-3/5">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
