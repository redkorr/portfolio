import { HeroSection, ProjectsSection, Skills, Technologies } from '@/components';

export default function Home() {
  return (
    <main className="mx-auto my-5 w-3/5">
      <HeroSection />
      <ProjectsSection />
      <Technologies />
      <Skills />
    </main>
  );
}
