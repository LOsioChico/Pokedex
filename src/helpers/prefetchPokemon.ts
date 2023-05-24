import { getPokemons } from '@/hooks/usePokemons'
import { type PrefetchPokemonProps } from '@/interfaces/prefetchPokemon'

export const prefetchPokemon = ({
  id,
  queryClient,
}: PrefetchPokemonProps): void => {
  if (Number(id) < 1 || Number(id) > 1010) return
  void queryClient.prefetchQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => await getPokemons(id),
    retry: 1,
    retryDelay: 200,
    staleTime: 1000 * 60 * 60,
  })
}
