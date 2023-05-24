import { pokemonTypes } from '@/assets/pokemon-types'
import { pokemonStats, pokemonStatsVariants, pokemonVariants } from '@/helpers'
import { usePokemons } from '@/hooks/usePokemons'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { AdaptativeBackground } from './components'
import { InputSearch } from './components/InputSearch'

export const PokemonDetail: React.FC = () => {
  const { id = '1' } = useParams()
  const { pokemon, pokemonQuery } = usePokemons(id)

  return (
    <>
      <AdaptativeBackground
        image={pokemon?.image}
        isLoading={pokemonQuery.isLoading}
      >
        <div className='mx-auto mt-8 w-11/12 text-lg font-bold drop-shadow-md'>
          <p>#{`${pokemon?.id}`.padStart(3, '0')}</p>
          <p className='text-3xl capitalize'>{pokemon?.name}</p>
        </div>

        <div className='m-20 mr-0 mt-24 flex w-full justify-evenly drop-shadow-md'>
          <AnimatePresence mode='wait'>
            <motion.img
              className='h-80 w-80'
              key={`pokemon-${pokemon?.id}`}
              src={pokemon?.image}
              alt={pokemon?.name}
              draggable='false'
              variants={pokemonVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{
                type: 'spring',
              }}
            />
          </AnimatePresence>

          <div className='absolute -left-6 top-24 text-sm drop-shadow-md'>
            <p>Height: {Number(pokemon?.height)} m</p>
            <p>Weight: {Number(pokemon?.weight) / 10} kg</p>
          </div>

          <div className='w-1/3 rounded-lg drop-shadow-md'>
            <div className='flex h-16 w-80 gap-3 pl-4'>
              <AnimatePresence mode='sync'>
                {pokemon?.types.map((type) => (
                  <motion.img
                    className='h-14 w-14 items-center justify-center rounded-full bg-[#ffffffcb] p-2'
                    src={pokemonTypes[type]}
                    key={type}
                    layoutId={type}
                    alt={type}
                    variants={pokemonVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                  />
                ))}
              </AnimatePresence>
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
                      <motion.div
                        className='absolute top-0 z-10 h-full rounded-full py-2'
                        variants={pokemonStatsVariants}
                        initial='initial'
                        animate={{
                          ...pokemonStatsVariants.animate,
                          width: `${stat.value / 1.5}%`,
                          backgroundColor: `${pokemonStats[stat.name].color}`,
                        }}
                      >
                        <motion.div
                          className='absolute -top-2 h-full rounded-full bg-white py-2'
                          variants={pokemonStatsVariants}
                          initial='initial'
                          animate={{
                            ...pokemonStatsVariants.animate,
                            width: `${stat.value / 1.5}% - 6px`,
                          }}
                        />
                      </motion.div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='flex w-full justify-end pr-44 font-bold text-black'>
          <div className='w-2/5'>
            <InputSearch />
          </div>
        </div>
      </AdaptativeBackground>
    </>
  )
}
