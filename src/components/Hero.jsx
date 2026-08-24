import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile } from "../data/portfolio";

const roles = [
  "Full-Stack Engineer",
  "AI & RAG Developer",
  "React + TypeScript",
  "FastAPI · Node.js",
];

function useTypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const completed = characterIndex === currentRole.length;
    const empty = characterIndex === 0;
    const delay = completed && !deleting ? 1400 : deleting ? 42 : 78;

    const timeout = window.setTimeout(() => {
      if (completed && !deleting) {
        setDeleting(true);
        return;
      }

      if (empty && deleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setCharacterIndex((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterIndex, deleting, roleIndex]);

  return roles[roleIndex].slice(0, characterIndex);
}

const socialLinks = [
  { label: "GitHub profile", href: profile.github, icon: GitHubIcon, external: true },
  { label: "LinkedIn profile", href: profile.linkedin, icon: LinkedInIcon, external: true },
  { label: "Send email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Call Syed Ishaq", href: `tel:${profile.phoneHref}`, icon: Phone },
];

export default function Hero() {
  const typedRole = useTypingText();

  return (
    <section id="home" className="personal-hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow hero-enter hero-delay-1">
          <span className="hero-status-dot" aria-hidden="true" />
          Open to 2026 new-grad roles
        </p>

        <h1 className="hero-name hero-enter hero-delay-2">
          Syed <span>Ishaq</span>
        </h1>

        <p className="hero-role hero-enter hero-delay-3">
          I build{" "}
          <span className="typed-role" aria-live="polite">
            {typedRole}
          </span>
          <span className="typing-cursor" aria-hidden="true" />
        </p>

        <p className="hero-summary hero-enter hero-delay-4">
          {profile.summary}
        </p>

        <div className="hero-actions hero-enter hero-delay-5">
          <a href="#projects" className="primary-button">
            View my work
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={profile.resume} className="hero-download" download>
            <Download size={18} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div className="hero-socials hero-enter hero-delay-6">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="hero-social-link"
            >
              <Icon size={19} aria-hidden="true" />
            </a>
          ))}
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
          Scroll
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
