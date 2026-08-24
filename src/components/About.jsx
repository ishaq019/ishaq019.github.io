import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import useCountUp from "../hooks/useCountUp";
import { about, certifications, profile, projects } from "../data/portfolio";

function Stat({ target, display, suffix = "", label }) {
  const [ref, count] = useCountUp(target);
  return (
    <div className="stat" ref={ref}>
      <p className="stat-value">
        <b>
          {display ?? count}
          {suffix}
        </b>
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

const facts = [
  { k: "Now", v: "Full Stack Intern · Leap Robots" },
  { k: "Focus", v: "Full-stack + applied AI (RAG)" },
  { k: "Flagship", v: "CareerSetu" },
  { k: "Based in", v: profile.location.replace(", India", "") },
];

export default function About() {
  return (
    <section id="about" className="section-shell section-alt">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            number="01"
            eyebrow="About"
            title="Engineer who ships the whole product."
            description="From interface to inference — I like owning a feature end to end and shipping something people actually use."
          />
        </Reveal>

        <div className="about-grid mt-12">
          <Reveal>
            <p className="about-lead text-balance">
              I turn ideas into working software across the{" "}
              <span className="hl">full stack</span> — and lately, into{" "}
              <span className="hl">AI features that stay grounded</span> in real data.
            </p>
            <p className="mt-6 text-[1.02rem] leading-8 text-muted-ui">{about}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card p-7">
              <p className="section-eyebrow" style={{ color: "var(--signal)" }}>
                Snapshot
              </p>
              <dl className="mt-5 grid gap-4">
                {facts.map((fact) => (
                  <div
                    key={fact.k}
                    className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted-ui">
                      {fact.k}
                    </dt>
                    <dd className="text-right text-sm font-medium text-[var(--text)]">{fact.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="stats-strip">
            <Stat target={projects.length} suffix="+" label="Projects shipped" />
            <Stat target={2} label="Dev internships" />
            <Stat target={certifications.length} label="Certifications" />
            <Stat target={9} display="9.03" label="B.Tech CGPA" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
