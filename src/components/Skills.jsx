import {
  Database,
  GraduationCap,
  MonitorSmartphone,
  ServerCog,
  SquareCode,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const icons = [SquareCode, MonitorSmartphone, ServerCog, Database, GraduationCap];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit for building complete products."
            description="Languages, frameworks, engineering tools, and computer science foundations I use to turn ideas into reliable software."
          />
        </Reveal>

        <div className="skills-grid mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={group.title}
                delay={index * 55}
                className={index === skillGroups.length - 1 ? "md:col-span-2" : ""}
              >
                <article className="surface-card skill-card group h-full p-6 sm:p-7">
                  <div className="skill-icon mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-slate-950 dark:text-white">{group.title}</h3>
                  <ul className={`mt-5 ${index === skillGroups.length - 1 ? "coursework-grid" : "skill-list"}`}>
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
