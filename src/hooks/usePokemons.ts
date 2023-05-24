import { pokeApi } from '@/api/pokeApi'
import { type PokeApi, type Pokemon, type UsePokemons } from '@/interfaces'
import { useQuery } from '@tanstack/react-query'

export const getPokemons = async (id: string): Promise<Pokemon> => {
  try {
    const { data } = await pokeApi.get<PokeApi>(`/pokemon/${id}`)
    const pokemon = {
      id: `${data.id}`,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      types: data.types.map((t) => t.type.name),
      stats: data.stats.map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
      height: `${data.height}`,
      weight: `${data.weight}`,
    }
    return pokemon
  } catch {
    throw new Error('Pokemon not found')
  }
}

export const usePokemons = (id: string): UsePokemons => {
  const pokemonQuery = useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => await getPokemons(id),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return {
    pokemon: pokemonQuery.data,
    pokemonQuery,
  }
}
