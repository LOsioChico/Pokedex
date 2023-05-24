import { Pokedex } from '@/pages/Pokedex/Pokedex'
import { PokemonDetail } from '@/pages/PokemonDetail/PokemonDetail'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/detail/:id' element={<PokemonDetail />} />
        <Route path='*' element={<Navigate to='/pokedex' />} />
      </Routes>
    </BrowserRouter>
  )
}
