import { pokemonTypes } from '@/assets/pokemon-types'
import { pokemonVariants } from '@/helpers'
import { type Pokemon } from '@/interfaces'
import { AnimatePresence, motion } from 'framer-motion'

export interface PokemonTypesProps {
  pokemon: Pokemon | undefined
}

export const PokemonTypes: React.FC<PokemonTypesProps> = ({ pokemon }) => {
  return (
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
            exit={{
              ...pokemonVariants.exit,
              scale: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
