import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell section-alt">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            number="05"
            eyebrow="Education"
            title="Academic foundation."
            description="My journey through computer science and engineering."
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
