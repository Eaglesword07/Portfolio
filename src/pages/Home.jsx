import Hero from "../components/home/Hero";
import SkillsTicker from "../components/home/SkillsTicker";
import AboutTeaser from "../components/home/AboutTeaser";
import ProjectStrip from "../components/home/ProjectStrip";
import HowIWork from "../components/home/HowIWork";
import CtaBanner from "../components/home/CtaBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta("", "[YOUR NAME]: [role]. Portfolio, services and contact.");

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