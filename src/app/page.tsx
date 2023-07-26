import { Footer, Header, HeroSection, ProjectsSection, Skills, Technologies } from '@/components';

export default function Home() {
  return (
    <main className="mx-auto w-3/5 scroll-smooth">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Technologies />
      <Skills />
      <Footer />
    </main>
  );
}
