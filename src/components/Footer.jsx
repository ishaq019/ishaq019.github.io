import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap flex flex-col gap-5 py-8 text-sm text-muted-ui sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind CSS.
        </p>
        <a href="#home" className="footer-top-link">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
