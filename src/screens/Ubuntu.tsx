import { UbuntuMark } from '../components/OsIcon'
import './Ubuntu.css'

export function Ubuntu() {
  return (
    <div className="ubuntu">
      <div className="ubuntu__brand">
        <span className="ubuntu__word">ubuntu</span>
        <svg className="ubuntu__mark" viewBox="0 0 100 100" aria-hidden>
          <UbuntuMark color="#ffffff" gap="#2c001e" />
        </svg>
      </div>

      <div className="ubuntu__dots" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>
    </div>
  )
}
