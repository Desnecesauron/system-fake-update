import { useFakeProgress } from '../hooks/useFakeProgress'
import './Windows7.css'

export function Windows7() {
  const progress = useFakeProgress({ stallAt: 85, intervalMs: 420 })

  return (
    <div className="win7">
      <div className="win7__inner">
        <p className="win7__title">Configuring Windows updates</p>
        <p className="win7__percent">{Math.floor(progress)}% complete</p>
        <p className="win7__warn">Do not turn off your computer.</p>
      </div>
    </div>
  )
}
