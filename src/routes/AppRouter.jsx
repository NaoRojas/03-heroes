import { LoginPage } from '../auth/pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes/routes/HeroesRotes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<HeroesRoutes />} />
    </Routes>
  )
}
