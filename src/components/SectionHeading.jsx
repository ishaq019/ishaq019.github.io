export default function SectionHeading({ eyebrow, title, description, align = "left", number }) {
  return (
    <div className={`section-head ${align === "center" ? "is-center" : ""}`}>
      <p className="section-eyebrow">
        {number ? <span className="section-number">{number}</span> : null}
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
