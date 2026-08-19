import { OsIcon } from '../components/OsIcon'
import './Ubuntu.css'

export function Ubuntu() {
  return (
    <div className="ubuntu">
      <div className="ubuntu__brand">
        <OsIcon kind="ubuntu" className="ubuntu__logo" />
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
