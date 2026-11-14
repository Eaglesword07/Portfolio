import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
import Parallax from "../ui/Parallax";

const stats = [
  { value: "[00]+", label: "Projects" },
  { value: "[00]+", label: "Clients" },
  { value: "[00]%", label: "Retention" },
];

export default function AboutTeaser() {
  return (
    <section className="grid items-center gap-14 px-5 py-20 md:min-h-[min(100vh,820px)] md:grid-cols-2 md:px-16">
      <Parallax className="h-110">[MY ABOUT IMAGE]</Parallax>

      <div className="flex flex-col gap-5">
        <Eyebrow>About me</Eyebrow>
        <h2 className="text-[34px]">[A short headline about my approach.]</h2>
        <p className="text-base leading-relaxed">
          [Two or three sentences about my background and how I work.]
        </p>

        <div className="my-2 flex gap-10">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-semibold leading-none">{value}</p>
              <p className="mt-1 text-[13px]">{label}</p>
            </div>
          ))}
        </div>

        <Link to="/about" className="self-start border-b-2 border-accent pb-0.75 font-medium">
          More about me →
        </Link>
      </div>
    </section>
  );
}