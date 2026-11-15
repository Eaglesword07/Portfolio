import AboutHero from "../components/about/AboutHero";
import CvSkills from "../components/about/CvSkills";
import Timeline from "../components/about/Timeline";
import WhyMe from "../components/about/WhyMe";
import { experience, education } from "../data/cv";

export default function About() {
  return (
    <>
      <AboutHero />
      <CvSkills />
      <Timeline eyebrow="Experience" title="Where I've worked" items={experience} />
      <Timeline eyebrow="Education" title="Where I studied" items={education} flush />
      <WhyMe />
    </>
  );
}