import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../../heroes'
import { DCPage } from '../../heroes'
import { LoginPage } from '../../auth'
import { SearchPage } from '../pages/SearchPage'
import { HeroPage } from '../pages/HeroPage'
import { NavBar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
