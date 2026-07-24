import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { profile } from "../data/portfolio";

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "CS Graduate 2026",
];

function useTypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const completed = characterIndex === currentRole.length;
    const empty = characterIndex === 0;
    const delay = completed && !deleting ? 1300 : deleting ? 42 : 78;

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
  {
    label: "GitHub profile",
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn profile",
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Send email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Call Syed Ishaq",
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
  },
];

export default function Hero() {
  const typedRole = useTypingText();

  return (
    <section id="home" className="personal-hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-greeting hero-enter hero-delay-1">Hello, It&apos;s Me</p>

        <h1 className="hero-name hero-enter hero-delay-2">
          Syed <span>Ishaq</span>
        </h1>

        <p className="hero-role hero-enter hero-delay-3">
          And I&apos;m a{" "}
          <span className="typed-role" aria-live="polite">
            {typedRole}
          </span>
          <span className="typing-cursor" aria-hidden="true" />
        </p>

        <p className="hero-summary hero-enter hero-delay-4">
          Full Stack Intern at <strong>Leap Robots LLP</strong> | B.Tech CSE
          2026 | Building full-stack web and desktop applications with
          React.js, Node.js, MongoDB, and Electron.js.
        </p>

        <div className="hero-socials hero-enter hero-delay-5">
          {socialLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="hero-social-link"
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </div>

        <a
          href={profile.resume}
          className="hero-download hero-enter hero-delay-6"
          download
        >
          <Download size={19} aria-hidden="true" />
          Download CV
        </a>

        <a
          href="#skills"
          className="hero-scroll"
          aria-label="Scroll to skills section"
        >
          
        </a>
      </div>
    </section>
  );
}
