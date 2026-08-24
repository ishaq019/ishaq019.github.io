import useCountUp from "../hooks/useCountUp";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Animated ATS match-score dial. Counts up to `score` and sweeps the arc
 * in lockstep when scrolled into view — a live nod to CareerSetu's
 * deterministic resume-to-job match score.
 */
export default function MatchGauge({ score = 92, label = "ATS match score" }) {
  const [ref, value] = useCountUp(score, 1700);
  const offset = CIRCUMFERENCE * (1 - value / 100);

  return (
    <div className="gauge-wrap" ref={ref}>
      <div className="gauge" role="img" aria-label={`${label}: ${score} out of 100`}>
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6b24a" />
              <stop offset="100%" stopColor="#e8992c" />
            </linearGradient>
          </defs>
          <circle className="gauge-track" cx="60" cy="60" r={RADIUS} />
          <circle
            className="gauge-value"
            cx="60"
            cy="60"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="gauge-center">
          <p className="gauge-num">
            {value}
            <sup>%</sup>
          </p>
          <p className="gauge-label">{label}</p>
        </div>
      </div>
      <p className="gauge-caption">Deterministic · explainable · resume ↔ role</p>
    </div>
  );
}
