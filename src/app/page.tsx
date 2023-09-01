import { Footer, Header, HeroSection, ProjectsSection, Skills, Technologies } from '@/components';

export default function Home() {
  return (
    <main className="lg:mx-auto lg:w-3/5 scroll-smooth px-8 lg:px-0">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Technologies />
      <Skills />
      <Footer />
    </main>
  );
}
