import { pokemonStats, pokemonStatsVariants } from '@/helpers'
import { type Pokemon } from '@/interfaces'
import { motion } from 'framer-motion'

export interface PokemonStatsProps {
  pokemon: Pokemon | undefined
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  return (
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
  )
}
