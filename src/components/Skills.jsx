import {
  Database,
  GraduationCap,
  MonitorSmartphone,
  ServerCog,
  SquareCode,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { AiGlyph } from "./BrandIcons";
import { skillGroups } from "../data/portfolio";

const icons = [SquareCode, MonitorSmartphone, ServerCog, AiGlyph, Database, GraduationCap];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="Skills"
            title="A practical toolkit for building complete products."
            description="Languages, frameworks, engineering tools, and computer science foundations I use to turn ideas into reliable software."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? SquareCode;
            const isLast = index === skillGroups.length - 1;
            return (
              <Reveal
                key={group.title}
                delay={index * 55}
                className={isLast ? "md:col-span-2" : ""}
              >
                <article className="surface-card skill-card group h-full p-6 sm:p-7">
                  <div className="skill-icon mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                    {group.title}
                  </h3>
                  <ul className={`mt-5 ${isLast ? "coursework-grid" : "skill-list"}`}>
                    {group.skills.map((skill) => (
                      <li key={skill} className="skill-chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
