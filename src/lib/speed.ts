import { createContext } from 'react'

export type Speed = 'slow' | 'medium' | 'frozen'

export interface ProgressConfig {
  /** Passo mínimo por tick (%). */
  minStep: number
  /** Passo máximo por tick (%). */
  maxStep: number
  /** Intervalo entre ticks (ms). */
  intervalMs: number
  /** A partir daqui o progresso quase congela. */
  stallAt: number
}

export const SPEED_PRESETS: Record<Speed, ProgressConfig> = {
  // Rasteja e trava perto do fim (~4-5 min para um ciclo).
  slow: { minStep: 0.05, maxStep: 0.3, intervalMs: 650, stallAt: 90 },
  // Anda devagar mas perceptível (~2 min).
  medium: { minStep: 0.12, maxStep: 0.7, intervalMs: 450, stallAt: 88 },
  // Sobe até ~30% e praticamente congela ali (prank clássico).
  frozen: { minStep: 0.1, maxStep: 0.6, intervalMs: 420, stallAt: 32 },
}

export const SPEED_LABELS: Record<Speed, string> = {
  slow: 'Bem lenta',
  medium: 'Média',
  frozen: 'Congela cedo',
}

/** Config de progresso ativa, provida pela tela de início. */
export const SpeedContext = createContext<ProgressConfig>(SPEED_PRESETS.medium)
