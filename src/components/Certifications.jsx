import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            number="06"
            eyebrow="Credentials"
            title="Certifications behind the engineering."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certifications.map((certificate, index) => (
            <Reveal key={certificate.title} delay={(index % 2) * 65}>
              <article className="surface-card certification-card group flex h-full items-start gap-5 p-6">
                <span className="skill-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <Award size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="cert-issuer">{certificate.issuer}</p>
                  <h3 className="cert-title">{certificate.title}</h3>
                  <a
                    href={certificate.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link mt-4"
                  >
                    Verify credential
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
