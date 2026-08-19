import { useContext, useEffect, useState } from 'react'
import { SpeedContext } from '../lib/speed'
import './WindowsXP.css'

export function WindowsXP() {
  const total = 12
  const { intervalMs } = useContext(SpeedContext)
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    // Cadência derivada da velocidade escolhida (cada passo = vários ticks).
    const stepMs = intervalMs * 8
    const id = setInterval(() => {
      // Fica "preso" perto do fim para nunca terminar.
      setCurrent((c) => (c >= total ? total - 1 : c + 1))
    }, stepMs)
    return () => clearInterval(id)
  }, [intervalMs])

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
          Please do not unplug or shutdown your computer.
        </p>
      </div>
    </div>
  )
}
