import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-white/70 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Work Experience"
            description="Hands-on work across MERN applications, Electron.js, testing, APIs, files, and connected hardware."
          />
        </Reveal>

        <div className="experience-timeline mt-12">
          {experience.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.period}`}
              className="experience-item"
              delay={index * 65}
            >
              <article className="experience-row">
                <span className="experience-marker">
                  <img src={item.logo} alt="" aria-hidden="true" />
                </span>

                <div className="experience-meta">
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-location">{item.location}</p>
                </div>

                <div className="experience-card">
                  <span className="card-shine" aria-hidden="true" />
                  <p className="leading-7 text-slate-700 dark:text-slate-200">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="experience-check">
                          <Check size={13} aria-hidden="true" />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${item.role} technologies`}>
                    {item.technologies.map((technology) => (
                      <li key={technology} className="tech-chip">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
