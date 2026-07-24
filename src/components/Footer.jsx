import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f5ef] dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
        <a href="#home" className="footer-top-link">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
