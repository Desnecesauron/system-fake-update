import { useFakeProgress } from '../hooks/useFakeProgress'
import { FakeQR } from '../components/FakeQR'
import './WindowsBSOD.css'

export function WindowsBSOD() {
  const progress = useFakeProgress({ stallAt: 92, maxStep: 0.9 })

  return (
    <div className="bsod">
      <div className="bsod__inner">
        <div className="bsod__face">:(</div>
        <p className="bsod__lead">
          Your PC ran into a problem and needs to restart. We're just
          collecting some error info, and then we'll restart for you.
        </p>
        <p className="bsod__progress">{Math.floor(progress)}% complete</p>

        <div className="bsod__more">
          <FakeQR className="bsod__qr" />
          <div className="bsod__more-text">
            <p>
              For more information about this issue and possible fixes, visit
              https://www.windows.com/stopcode
            </p>
            <p>
              If you call a support person, give them this info:
              <br />
              Stop code: CRITICAL_PROCESS_DIED
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
