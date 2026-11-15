import Hero from "../components/home/Hero";
import SkillsTicker from "../components/home/SkillsTicker";
import AboutTeaser from "../components/home/AboutTeaser";
import ProjectStrip from "../components/home/ProjectStrip";
import HowIWork from "../components/home/HowIWork";
import CtaBanner from "../components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsTicker />
      <AboutTeaser />
      <ProjectStrip />
      <HowIWork />
      <CtaBanner />
    </>
  );
}