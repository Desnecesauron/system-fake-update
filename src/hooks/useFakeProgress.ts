import { useContext, useEffect, useRef, useState } from 'react'
import { SpeedContext } from '../lib/speed'

/**
 * Progresso falso que sobe de forma irregular e desacelera perto do fim,
 * imitando barras de atualização reais que ficam presas em ~90%.
 * Ao chegar em 100 reinicia, dando a sensação de update infinito.
 *
 * A cadência (velocidade) vem do SpeedContext, configurado na tela de início.
 */
export function useFakeProgress(): number {
  const { minStep, maxStep, intervalMs, stallAt } = useContext(SpeedContext)
  const [progress, setProgress] = useState(0)
  const value = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      const current = value.current
      // Perto do stall os incrementos ficam bem pequenos.
      const damping = current > stallAt ? 0.06 : 1
      const step = (minStep + Math.random() * (maxStep - minStep)) * damping
      let next = current + step

      if (next >= 100) {
        next = 0 // loop infinito de "quase lá"
      }

      value.current = next
      setProgress(next)
    }, intervalMs)

    return () => clearInterval(id)
  }, [minStep, maxStep, intervalMs, stallAt])

  return progress
}
