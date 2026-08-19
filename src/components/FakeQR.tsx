interface Props {
  className?: string
  /** Módulos por lado. */
  size?: number
}

// Padrão localizador (finder) 7x7 dos cantos de um QR real.
const FINDER = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

function inFinder(r: number, c: number, size: number): boolean {
  const top = r < 7
  const bottom = r >= size - 7
  const left = c < 7
  const right = c >= size - 7
  if (top && left) return !!FINDER[r][c]
  if (top && right) return !!FINDER[r][c - (size - 7)]
  if (bottom && left) return !!FINDER[r - (size - 7)][c]
  return false
}

function isFinderZone(r: number, c: number, size: number): boolean {
  return (
    (r < 8 && c < 8) ||
    (r < 8 && c >= size - 8) ||
    (r >= size - 8 && c < 8)
  )
}

/**
 * "QR code" puramente decorativo (não codifica nada).
 * Determinístico: mesma imagem em todo render.
 */
export function FakeQR({ className, size = 21 }: Props) {
  const cells: { r: number; c: number }[] = []
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFinderZone(r, c, size)) {
        if (inFinder(r, c, size)) cells.push({ r, c })
        continue
      }
      // Hash determinístico para preencher os módulos de dados.
      if (((r * 31 + c * 17 + r * c) % 5) < 2) cells.push({ r, c })
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="QR code"
    >
      <rect width={size} height={size} fill="#fff" />
      {cells.map(({ r, c }) => (
        <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#000" />
      ))}
    </svg>
  )
}
