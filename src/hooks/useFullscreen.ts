import { useCallback, useEffect, useState } from 'react'

/**
 * Controla a Fullscreen API do navegador.
 * Retorna estado atual e funções para entrar/sair.
 * O navegador só permite entrar em fullscreen a partir de um gesto do usuário
 * (clique/tecla), por isso `enter` deve ser chamado dentro de um handler.
 */
export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(
    () => !!document.fullscreenElement,
  )

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const enter = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen()
    } catch {
      // Bloqueado (sem gesto do usuário ou não suportado): segue sem fullscreen.
    }
  }, [])

  const exit = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
    } catch {
      // ignore
    }
  }, [])

  return { isFullscreen, enter, exit }
}
