import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, profile } from "../data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navigation.map(({ href }) => href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="font-serif text-3xl tracking-[-0.04em] text-slate-950 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link text-sm font-semibold ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-slate-700 dark:text-slate-200"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation grid overflow-hidden border-t px-5 lg:hidden ${
          menuOpen ? "is-open" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="grid py-3">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link rounded-lg px-3 py-3 text-base font-semibold"
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
