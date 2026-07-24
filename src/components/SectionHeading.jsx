export default function SectionHeading({ eyebrow, title, description, align = "left", tone = "default" }) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const eyebrowColor = tone === "dark" ? "text-emerald-300" : "text-emerald-700 dark:text-emerald-300";
  const titleColor = tone === "dark" ? "text-white" : "text-slate-950 dark:text-white";
  const descriptionColor = tone === "dark" ? "text-slate-300" : "text-slate-600 dark:text-slate-300";

  return (
    <div className={alignment}>
      <p className={`section-eyebrow ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`section-title ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`section-description ${descriptionColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
