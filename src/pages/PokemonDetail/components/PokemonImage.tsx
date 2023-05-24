import { pokemonVariants } from '@/helpers'
import { type Pokemon } from '@/interfaces'
import { AnimatePresence, motion } from 'framer-motion'

interface PokemonImageProps {
  pokemon: Pokemon | undefined
}

export const PokemonImage: React.FC<PokemonImageProps> = ({ pokemon }) => {
  return (
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
      />
    </AnimatePresence>
  )
}
