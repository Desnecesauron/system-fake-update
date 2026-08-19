import { useEffect, useState } from 'react'
import './WindowsXP.css'

export function WindowsXP() {
  const total = 12
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      // Fica "preso" perto do fim para nunca terminar.
      setCurrent((c) => (c >= total ? total - 1 : c + 1))
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="winxp">
      <div className="winxp__inner">
        <p className="winxp__title">Please wait...</p>
        <div className="winxp__bar" aria-hidden>
          <div className="winxp__bar-track">
            <div className="winxp__bar-chunk" />
          </div>
        </div>
        <p className="winxp__step">
          Installing update {current} of {total}...
        </p>
        <p className="winxp__warn">
          Do not turn off or unplug your computer.
        </p>
      </div>
    </div>
  )
}
