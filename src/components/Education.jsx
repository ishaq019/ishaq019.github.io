import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Education"
            description="My academic journey in computer science and engineering."
          />
        </Reveal>

        <div className="education-grid mt-12">
          {education.map((item, index) => (
            <Reveal key={item.institution} className="education-item" delay={index * 55}>
              <article className="education-card">
                <div className="education-icon">
                  <GraduationCap size={25} aria-hidden="true" />
                </div>
                <p className="education-period">{item.period}</p>
                <h3>{item.institution}</h3>
                <p className="education-qualification">{item.qualification}</p>
                <p className="education-result">{item.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
