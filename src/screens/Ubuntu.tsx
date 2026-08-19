import './Ubuntu.css'

export function Ubuntu() {
  return (
    <div className="ubuntu">
      <div className="ubuntu__brand">
        <svg className="ubuntu__logo" viewBox="0 0 100 100" aria-label="Ubuntu">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#e95420" strokeWidth="6" />
          <g fill="#e95420">
            <circle cx="50" cy="12" r="9" />
            <circle cx="17" cy="69" r="9" />
            <circle cx="83" cy="69" r="9" />
          </g>
          <circle cx="50" cy="50" r="10" fill="#e95420" />
        </svg>
        <span className="ubuntu__word">ubuntu</span>
      </div>

      <div className="ubuntu__dots" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>

      <p className="ubuntu__caption">Installing updates… do not power off.</p>
    </div>
  )
}
