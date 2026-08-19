import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFullscreen } from '../hooks/useFullscreen'
import './ScreenShell.css'

interface Props {
  title: string
  children: ReactNode
}

/**
 * Casca comum das telas fake:
 * - overlay inicial (necessário para o gesto que libera o fullscreen)
 * - entra em fullscreen ao iniciar
 * - Esc sai do fullscreen e volta para a home
 * - dica discreta de saída
 */
export function ScreenShell({ title, children }: Props) {
  const navigate = useNavigate()
  const { enter, exit } = useFullscreen()
  const [started, setStarted] = useState(false)

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
        <div className="shell-launch__card">
          <h1>{title}</h1>
          <p>Clique para abrir em tela cheia.</p>
          <button type="button" onClick={start}>
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
    <div className="shell-stage">
      {children}
      <div className="shell-exit-hint">Esc para sair</div>
    </div>
  )
}
