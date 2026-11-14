import Marquee from "../ui/Marquee";
import { tickerSkills } from "../../data/skills";

export default function SkillsTicker() {
  return (
    <Marquee className="bg-ink py-5 text-[22px] font-medium text-paper">
      {tickerSkills.map((skill) => (
        <span key={skill} className="flex items-center gap-10 whitespace-nowrap pr-10">
          {skill}
          <span className="text-accent">✦</span>
        </span>
      ))}
    </Marquee>
  );
}