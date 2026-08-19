import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Passo mínimo de incremento por tick (%). */
  minStep?: number
  /** Passo máximo de incremento por tick (%). */
  maxStep?: number
  /** Intervalo entre ticks (ms). */
  intervalMs?: number
  /** Ponto onde o progresso começa a "travar" para parecer real. */
  stallAt?: number
}

/**
 * Progresso falso que sobe de forma irregular e desacelera perto do fim,
 * imitando barras de atualização reais que ficam presas em ~90%.
 * Ao chegar em 100 reinicia, dando a sensação de update infinito.
 */
export function useFakeProgress({
  minStep = 0.15,
  maxStep = 1.4,
  intervalMs = 350,
  stallAt = 90,
}: Options = {}): number {
  const [progress, setProgress] = useState(0)
  const value = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      const current = value.current
      // Perto do stall os incrementos ficam bem pequenos.
      const damping = current > stallAt ? 0.08 : 1
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
