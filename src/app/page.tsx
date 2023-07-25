import { HeroSection, NavigationBar, ProjectsSection, Skills, Technologies } from '@/components';

export default function Home() {
  return (
    <main className="mx-auto w-3/5 scroll-smooth">
      <NavigationBar />
      <HeroSection />
      <ProjectsSection />
      <Technologies />
      <Skills />
    </main>
  );
}
