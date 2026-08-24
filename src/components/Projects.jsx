import { useState } from "react";
import { Check, ChevronDown, ChevronUp, CodeXml, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import MatchGauge from "./MatchGauge";
import { AiGlyph } from "./BrandIcons";
import { projects } from "../data/portfolio";

function FlagshipSpotlight({ project }) {
  return (
    <div className="flagship">
      <div className="flagship-inner">
        <span className="card-shine" aria-hidden="true" />
        <div className="flagship-grid">
          <div>
            <span className="flagship-badge">
              <AiGlyph size={13} />
              Flagship · Live
            </span>
            <h3 className="flagship-title">{project.title}</h3>
            <p className="flagship-tagline">{project.tagline}</p>

            <ul className="flagship-features">
              {project.features.map((feature) => (
                <li key={feature} className="flagship-feature">
                  <Check size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <ul className="flagship-stack" aria-label={`${project.title} technologies`}>
              {project.technologies.map((tech) => (
                <li key={tech} className="tech-chip">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flagship-actions">
              <a href={project.live} target="_blank" rel="noreferrer" className="primary-button">
                <ExternalLink size={17} aria-hidden="true" />
                Open live app
              </a>
              <a href={project.source} target="_blank" rel="noreferrer" className="secondary-button">
                <CodeXml size={17} aria-hidden="true" />
                Source code
              </a>
            </div>
          </div>

          <MatchGauge score={project.matchScore} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="surface-card project-card group">
      <div className="project-media">
        <img
          src={project.image}
          alt={`Interface preview of ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="project-title">{project.title}</h3>
          {project.featured ? <span className="project-badge">Featured</span> : null}
        </div>
        <p className="project-desc">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="tech-chip">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-5 border-t border-white/[0.06] pt-5">
          <a href={project.source} target="_blank" rel="noreferrer" className="project-link">
            <CodeXml size={17} aria-hidden="true" />
            Source code
          </a>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
              <ExternalLink size={17} aria-hidden="true" />
              Live project
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const flagship = projects.find((project) => project.flagship);
  const rest = projects.filter((project) => !project.flagship);
  const visibleProjects = showAll ? rest : rest.slice(0, 4);

  return (
    <section id="projects" className="section-shell">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            number="04"
            eyebrow="Projects"
            title="Selected work across web, desktop, AI, and data."
            description="Starting with the flagship, then a broader set spanning full-stack apps, machine learning, and analytics."
          />
        </Reveal>

        {flagship ? (
          <Reveal className="mt-12">
            <FlagshipSpotlight project={flagship} />
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 65}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
            {showAll ? "Show fewer projects" : `Show all ${rest.length} projects`}
          </button>
        </div>
      </div>
    </section>
  );
}
