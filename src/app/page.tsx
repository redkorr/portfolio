'use client';

import { BackgroundAnimation, Footer, Header, HeroSection, ProjectsSection, Skills, Technologies } from '@/components';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <main className="mx-auto w-3/5 scroll-smooth relative z-20">
      <div className="background">
        <ParallaxProvider>
          <BackgroundAnimation />
        </ParallaxProvider>
      </div>
      <div className="foreground">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <Technologies />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
