import FeaturedProjects from '@/components/sections/featured-projects';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skill';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Skills />
    </main>
  );
}