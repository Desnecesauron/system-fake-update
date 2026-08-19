import { useFakeProgress } from '../hooks/useFakeProgress'
import './Windows7.css'

export function Windows7() {
  const progress = useFakeProgress()

  return (
    <div className="win7">
      {/* Traços de luz curvos do wallpaper padrão do Windows 7. */}
      <svg className="win7__streaks" viewBox="0 0 1024 640" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g fill="none" stroke="#fff" strokeOpacity="0.5">
          <path d="M-20 120 C 260 40, 520 200, 1040 60" strokeWidth="1.4" />
          <path d="M-20 200 C 300 150, 560 300, 1040 260" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M-20 90 C 240 30, 620 120, 1040 20" strokeWidth="0.8" strokeOpacity="0.35" />
          <path d="M120 640 C 380 420, 700 420, 1040 360" strokeWidth="1.2" stroke="#bff0a8" strokeOpacity="0.4" />
        </g>
      </svg>

      <div className="win7__center">
        <span className="win7__spinner" aria-hidden />
        <div className="win7__text">
          <p>Configuring Windows updates</p>
          <p>{Math.floor(progress)}% complete</p>
          <p>Do not turn off your computer.</p>
        </div>
      </div>

      <div className="win7__brand" aria-hidden>
        <svg className="win7__flag" viewBox="0 0 100 100">
          <path fill="#f65314" d="M6 26 46 18v30L6 52z" />
          <path fill="#7cbb00" d="M52 17 94 9v31l-42 4z" />
          <path fill="#00a1f1" d="M6 58l40-4v30L6 90z" />
          <path fill="#ffbb00" d="M52 54l42-4v33l-42 8z" />
        </svg>
        <span className="win7__brand-name">Windows</span>
        <span className="win7__brand-seven">7</span>
        <span className="win7__brand-edition">Ultimate</span>
      </div>
    </div>
  )
}
