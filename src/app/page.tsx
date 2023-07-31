'use client';

import { BackgroundAnimation, Footer, Header, HeroSection, ProjectsSection, Skills, Technologies } from '@/components';

import { Parallax } from '@react-spring/parallax';

export default function Home() {
  return (
    <Parallax
      pages={2.37}
      style={{ top: '0', left: '0' }}
    >
      <main className="mx-auto w-3/5 scroll-smooth">
        <BackgroundAnimation />
        <Header />
        <HeroSection />
        <ProjectsSection />
        <Technologies />
        <Skills />
        <Footer />
      </main>
    </Parallax>
  );
}
