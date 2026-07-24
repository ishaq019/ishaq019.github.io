import { useState } from "react";
import { ChevronDown, ChevronUp, CodeXml, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

function ProjectCard({ project }) {
  return (
    <article className="surface-card project-card group flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
        <img
          src={project.image}
          alt={`Interface preview of ${project.title}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold leading-7 text-slate-950 dark:text-white">{project.title}</h3>
          {project.featured ? (
            <span className="shrink-0 rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
              Featured
            </span>
          ) : null}
        </div>
        <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
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
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-shell bg-white/70 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across web, desktop, AI, and data."
            description="Every project below comes from the original portfolio. Descriptions were tightened for clarity without inventing outcomes."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
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
            {showAll ? "Show fewer projects" : `Show all ${projects.length} projects`}
          </button>
        </div>
      </div>
    </section>
  );
}
