import { useFakeProgress } from '../hooks/useFakeProgress'
import './WindowsUpdate.css'

export function WindowsUpdate() {
  const progress = useFakeProgress({ stallAt: 88 })

  return (
    <div className="win-update">
      <div className="win-update__spinner" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.16}s` }} />
        ))}
      </div>
      <p className="win-update__title">
        Working on updates {Math.floor(progress)}%
      </p>
      <p className="win-update__subtitle">Don't turn off your PC.</p>
    </div>
  )
}
