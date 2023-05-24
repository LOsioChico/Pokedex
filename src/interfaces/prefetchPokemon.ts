import { type QueryClient } from '@tanstack/react-query'

export interface PrefetchPokemonProps {
  id: string
  queryClient: QueryClient
}
