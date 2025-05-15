import FeaturedProjects from "@/components/sections/Projects/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import GetInTouch from "@/components/sections/GetInTouch";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <GetInTouch />
    </div>
  );
}
