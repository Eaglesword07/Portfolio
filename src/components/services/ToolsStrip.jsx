import Marquee from "../ui/Marquee";
import { tools } from "../../data/services";

export default function ToolsStrip() {
  return (
    <Marquee duration={28} className="bg-ink py-5 text-[22px] font-medium text-paper">
      {tools.map((tool) => (
        <span key={tool} className="flex items-center gap-10 whitespace-nowrap pr-10">
          {tool}
          <span className="text-accent">✦</span>
        </span>
      ))}
    </Marquee>
  );
}