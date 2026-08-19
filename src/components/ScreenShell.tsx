import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFullscreen } from '../hooks/useFullscreen'
import { OsIcon, type OsKind } from './OsIcon'
import {
  SPEED_LABELS,
  SPEED_PRESETS,
  SpeedContext,
  type Speed,
} from '../lib/speed'
import './ScreenShell.css'

interface Props {
  title: string
  icon: OsKind
  accent: string
  children: ReactNode
}

const SPEED_ORDER: Speed[] = ['slow', 'medium', 'frozen']

/**
 * Casca comum das telas fake:
 * - overlay inicial com ícone, seletor de velocidade e botão Voltar
 * - o botão iniciar entra em fullscreen (precisa do gesto do usuário)
 * - Esc sai do fullscreen e volta para a home
 */
export function ScreenShell({ title, icon, accent, children }: Props) {
  const navigate = useNavigate()
  const { enter, exit } = useFullscreen()
  const [started, setStarted] = useState(false)
  const [speed, setSpeed] = useState<Speed>('slow')

  useEffect(() => {
    if (!started) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        exit()
        navigate('/')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [started, exit, navigate])

  const start = () => {
    enter()
    setStarted(true)
  }

  if (!started) {
    return (
      <div className="shell-launch">
        <button
          type="button"
          className="shell-launch__back"
          onClick={() => navigate('/')}
        >
          ← Voltar
        </button>

        <div
          className="shell-launch__card"
          style={{ '--accent': accent } as React.CSSProperties}
        >
          <OsIcon kind={icon} className="shell-launch__icon" />
          <h1>{title}</h1>
          <p>Clique para abrir em tela cheia.</p>

          <div className="shell-launch__speed">
            <span className="shell-launch__speed-label">Velocidade</span>
            <div className="shell-launch__speed-opts">
              {SPEED_ORDER.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={
                    s === speed
                      ? 'shell-launch__speed-btn is-active'
                      : 'shell-launch__speed-btn'
                  }
                  onClick={() => setSpeed(s)}
                >
                  {SPEED_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="shell-launch__start"
            onClick={start}
          >
            Iniciar prank
          </button>
          <span className="shell-launch__hint">
            Pressione <kbd>Esc</kbd> a qualquer momento para sair.
          </span>
        </div>
      </div>
    )
  }

  return (
    <SpeedContext.Provider value={SPEED_PRESETS[speed]}>
      <div className="shell-stage">
        {children}
        <div className="shell-exit-hint">Esc para sair</div>
      </div>
    </SpeedContext.Provider>
  )
}
