import { pokemonTypes } from '@/assets/pokemon-types'
import { pokemonStats } from '@/helpers/pokemonStats'
import { usePokemons } from '@/hooks/usePokemons'
import { useParams } from 'react-router-dom'

export const PokemonDetail: React.FC = () => {
  const { id = '1' } = useParams()
  const { pokemon, pokemonQuery } = usePokemons(id)

  if (pokemonQuery.isLoading)
    return (
      <img
        className='mx-auto h-20 w-20 animate-spin'
        src='/src/assets/pokeball.png'
        alt='loading'
      />
    )

  return (
    <>
      <div className='container mx-auto flex h-screen items-center justify-center'>
        <main className='relative h-screen max-h-[70%] w-screen max-w-[70%] rounded-3xl bg-orange-300 text-white'>
          <div className='mx-auto mt-8 w-11/12 text-lg font-bold'>
            <p>#{`${pokemon?.id}`.padStart(3, '0')}</p>
            <p className='text-3xl capitalize drop-shadow-md'>
              {pokemon?.name}
            </p>
          </div>

          <div className='m-20 mr-0 mt-16 flex w-full justify-around drop-shadow-md'>
            <img
              className='h-80 w-80'
              src={pokemon?.image}
              draggable='false'
              alt={pokemon?.name}
            />

            <div className='absolute -left-6 top-24 text-sm'>
              <p>Height: {Number(pokemon?.height)} m</p>
              <p>Height: {Number(pokemon?.weight) / 10} kg</p>
            </div>

            <div className='w-1/3 rounded-lg'>
              <div className='flex h-16 w-80 gap-3 pl-4'>
                {pokemon?.types.map((type) => {
                  return (
                    <img
                      key={type}
                      className='h-14 w-14 items-center justify-center rounded-full bg-[#ffffffcb] p-2'
                      src={pokemonTypes[type]}
                      alt={type}
                    />
                  )
                })}
              </div>

              <ul className='mt-3 w-full pr-12'>
                {pokemon?.stats.map((stat) => {
                  return (
                    <li
                      className='mb-2 flex w-full items-center gap-2 rounded-xl px-4 font-bold text-black text-opacity-60 last:mb-0'
                      key={stat.name}
                    >
                      <div className='w-28'>
                        <div className='w-28 rounded-lg bg-[#ffffffcb] py-px pl-3'>
                          <p className='mx-auto select-none font-extrabold'>
                            {pokemonStats[stat.name].name}: {stat.value}
                          </p>
                        </div>
                      </div>

                      <div className='relative h-2 w-2/3 overflow-hidden rounded-full bg-[#ffffffcb] py-2.5'>
                        <div
                          className='absolute top-0 z-10 h-full rounded-full py-2'
                          style={{
                            width: `${stat.value / 1.5}%`,
                            backgroundColor: `${pokemonStats[stat.name].color}`,
                          }}
                        >
                          <div
                            className='absolute -top-2 h-full rounded-full bg-white py-2'
                            style={{
                              width: `${stat.value / 1.5}% - 6px`,
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
