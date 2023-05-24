import { usePokemons } from '@/hooks/usePokemons'
import { useParams } from 'react-router-dom'
import {
  AdaptativeBackground,
  InputSearch,
  PokemonImage,
  PokemonStats,
  PokemonTypes,
} from './components'

export const PokemonDetail: React.FC = () => {
  const { id = '1' } = useParams()
  const { pokemon, pokemonQuery } = usePokemons(id)

  return (
    <AdaptativeBackground
      image={pokemon?.image}
      isLoading={pokemonQuery.isLoading}
    >
      <header className='mx-auto mt-8 w-11/12 text-lg font-bold drop-shadow-md'>
        <p>#{`${pokemon?.id}`.padStart(3, '0')}</p>
        <p className='text-3xl capitalize'>{pokemon?.name}</p>
      </header>

      <div className='m-20 mr-0 mt-24 flex w-full justify-evenly drop-shadow-md'>
        <PokemonImage pokemon={pokemon} />

        <div className='absolute -left-6 top-24 text-sm drop-shadow-md'>
          <p>Height: {Number(pokemon?.height)} m</p>
          <p>Weight: {Number(pokemon?.weight) / 10} kg</p>
        </div>

        <div className='w-1/3 rounded-lg drop-shadow-md'>
          <PokemonTypes pokemon={pokemon} />
          <PokemonStats pokemon={pokemon} />
        </div>
      </div>
      <div className='flex w-full justify-end pr-44 font-bold text-black'>
        <div className='w-2/5'>
          <InputSearch />
        </div>
      </div>
    </AdaptativeBackground>
  )
}
