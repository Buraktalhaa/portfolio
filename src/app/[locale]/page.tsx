import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";


export default function Home() {
  return (
    <main className="flex flex-col gap-0 bg-[#020617] min-h-screen">
      
      <Hero />

      <Skills />

      <Experience />

      <FeaturedProjects />

      <Education />

      <Contact />

    </main>
  );
}