import { useFakeProgress } from '../hooks/useFakeProgress'
import './MacOS.css'

export function MacOS() {
  const progress = useFakeProgress()

  return (
    <div className="macos">
      <svg className="macos__logo" viewBox="0 0 170 210" aria-label="Apple">
        <path
          fill="#f5f5f7"
          d="M129 111c-.2-22 18-32.6 18.8-33.2-10.3-15-26.3-17.1-32-17.3-13.6-1.4-26.6 8-33.5 8-6.9 0-17.6-7.8-28.9-7.6-14.9.2-28.6 8.6-36.3 22-15.5 26.9-4 66.7 11.1 88.5 7.4 10.7 16.2 22.7 27.7 22.3 11.1-.5 15.3-7.2 28.7-7.2s17.2 7.2 28.9 7c11.9-.2 19.5-10.9 26.8-21.6 8.4-12.3 11.9-24.2 12.1-24.8-.3-.1-23.2-8.9-23.4-35.3zM107 46.4c6.1-7.4 10.2-17.7 9.1-28-8.8.4-19.4 5.9-25.7 13.2-5.6 6.5-10.5 16.9-9.2 26.9 9.8.8 19.8-5 25.8-12.1z"
        />
      </svg>

      <div className="macos__bar" aria-hidden>
        <div
          className="macos__bar-fill"
          style={{ width: `${Math.floor(progress)}%` }}
        />
      </div>

      <p className="macos__caption">Installing a software update…</p>
    </div>
  )
}
