import { type UseQueryResult } from '@tanstack/react-query'

export interface Pokemon {
  id: string
  name: string
  image: string
  types: string[]
  stats: Stats[]
  height: string
  weight: string
}

export interface Stats {
  name: string
  value: number
}

export interface UsePokemons {
  pokemon: Pokemon | undefined
  pokemonQuery: UseQueryResult<Pokemon, unknown>
}
