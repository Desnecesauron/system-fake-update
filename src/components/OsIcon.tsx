export type OsKind = 'windows' | 'windows-classic' | 'apple' | 'ubuntu'

interface Props {
  kind: OsKind
  className?: string
}

/** Ícones dos sistemas usados nos cards e na tela de início. */
export function OsIcon({ kind, className }: Props) {
  switch (kind) {
    case 'windows':
      // Logo flat do Windows 8/10/11 (quatro painéis).
      return (
        <svg className={className} viewBox="0 0 100 100" aria-hidden>
          <path fill="currentColor" d="M4 14 46 8v38H4z" />
          <path fill="currentColor" d="M52 7 96 1v45H52z" />
          <path fill="currentColor" d="M4 54h42v38L4 86z" />
          <path fill="currentColor" d="M52 54h44v45l-44-6z" />
        </svg>
      )

    case 'windows-classic':
      // Bandeira ondulada clássica (XP / 7).
      return (
        <svg className={className} viewBox="0 0 100 100" aria-hidden>
          <path fill="#f65314" d="M6 26 46 18v30L6 52z" />
          <path fill="#7cbb00" d="M52 17 94 9v31l-42 4z" />
          <path fill="#00a1f1" d="M6 58l40-4v30L6 90z" />
          <path fill="#ffbb00" d="M52 54l42-4v33l-42 8z" />
        </svg>
      )

    case 'apple':
      return (
        <svg className={className} viewBox="0 0 170 210" aria-hidden>
          <path
            fill="currentColor"
            d="M129 111c-.2-22 18-32.6 18.8-33.2-10.3-15-26.3-17.1-32-17.3-13.6-1.4-26.6 8-33.5 8-6.9 0-17.6-7.8-28.9-7.6-14.9.2-28.6 8.6-36.3 22-15.5 26.9-4 66.7 11.1 88.5 7.4 10.7 16.2 22.7 27.7 22.3 11.1-.5 15.3-7.2 28.7-7.2s17.2 7.2 28.9 7c11.9-.2 19.5-10.9 26.8-21.6 8.4-12.3 11.9-24.2 12.1-24.8-.3-.1-23.2-8.9-23.4-35.3zM107 46.4c6.1-7.4 10.2-17.7 9.1-28-8.8.4-19.4 5.9-25.7 13.2-5.6 6.5-10.5 16.9-9.2 26.9 9.8.8 19.8-5 25.8-12.1z"
          />
        </svg>
      )

    case 'ubuntu':
      return (
        <svg className={className} viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="42" fill="none" stroke="#e95420" strokeWidth="5" />
          <g stroke="#e95420" strokeWidth="5">
            <line x1="50" y1="50" x2="50" y2="16" />
            <line x1="50" y1="50" x2="21" y2="66" />
            <line x1="50" y1="50" x2="79" y2="66" />
          </g>
          <g fill="#e95420">
            <circle cx="50" cy="14" r="10" />
            <circle cx="19" cy="67" r="10" />
            <circle cx="81" cy="67" r="10" />
          </g>
          <circle cx="50" cy="50" r="11" fill="#e95420" stroke="#2c001e" strokeWidth="3" />
        </svg>
      )
  }
}
