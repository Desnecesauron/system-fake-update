import { useParams, Navigate } from 'react-router-dom'
import { ScreenShell } from '../components/ScreenShell'
import { getScreen } from '../screens/registry'

export function ScreenPage() {
  const { id } = useParams()
  const screen = getScreen(id)

  if (!screen) return <Navigate to="/" replace />

  const Screen = screen.component
  return (
    <ScreenShell title={screen.title}>
      <Screen />
    </ScreenShell>
  )
}
