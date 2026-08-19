import { useFakeProgress } from '../hooks/useFakeProgress'
import './WindowsUpdate.css'

export function WindowsUpdate() {
  const progress = useFakeProgress()

  return (
    <div className="win-update">
      <div className="win-update__spinner" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.16}s` }} />
        ))}
      </div>
      <p className="win-update__title">Working on updates</p>
      <p className="win-update__percent">
        {Math.floor(progress)}% complete
      </p>
      <p className="win-update__subtitle">
        Don't turn off your PC. This will take a while.
      </p>
    </div>
  )
}
