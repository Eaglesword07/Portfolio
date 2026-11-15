import Marquee from "../ui/Marquee";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectStrip() {
  return (
    <section className="flex flex-col justify-center overflow-hidden py-12 md:min-h-[min(100vh,820px)]">
      <Marquee duration={44} >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Marquee>
    </section>
  );
}