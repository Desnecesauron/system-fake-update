import type { ComponentType } from 'react'
import { WindowsUpdate } from './WindowsUpdate'
import { WindowsXP } from './WindowsXP'
import { Windows7 } from './Windows7'
import { WindowsBSOD } from './WindowsBSOD'
import { MacOS } from './MacOS'
import { Ubuntu } from './Ubuntu'

export interface ScreenMeta {
  /** Slug usado na rota /s/:id */
  id: string
  /** Nome exibido no card */
  title: string
  /** Linha de apoio no card */
  subtitle: string
  /** Cor de destaque do card */
  accent: string
  /** Componente da tela fullscreen */
  component: ComponentType
}

export const SCREENS: ScreenMeta[] = [
  {
    id: 'windows-update',
    title: 'Windows Update',
    subtitle: 'Working on updates — Windows 10/11',
    accent: '#0078d7',
    component: WindowsUpdate,
  },
  {
    id: 'windows-bsod',
    title: 'Blue Screen of Death',
    subtitle: ':( Your PC ran into a problem',
    accent: '#0078d7',
    component: WindowsBSOD,
  },
  {
    id: 'windows-7',
    title: 'Windows 7',
    subtitle: 'Configuring updates — do not turn off',
    accent: '#1f7ec4',
    component: Windows7,
  },
  {
    id: 'windows-xp',
    title: 'Windows XP',
    subtitle: 'Bliss — please wait',
    accent: '#3a6ea5',
    component: WindowsXP,
  },
  {
    id: 'macos',
    title: 'macOS',
    subtitle: 'Installing a software update',
    accent: '#555555',
    component: MacOS,
  },
  {
    id: 'ubuntu',
    title: 'Ubuntu',
    subtitle: 'Unattended upgrade in progress',
    accent: '#e95420',
    component: Ubuntu,
  },
]

export function getScreen(id: string | undefined): ScreenMeta | undefined {
  return SCREENS.find((s) => s.id === id)
}
