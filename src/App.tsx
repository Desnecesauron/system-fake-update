import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { ScreenPage } from './pages/ScreenPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/s/:id" element={<ScreenPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
