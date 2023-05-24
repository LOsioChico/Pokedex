import { backgroundVariants, pokemonBackgroundVariants } from '@/helpers'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDominantColor } from '../hooks'

interface AdaptativeBackgroundProps {
  children: React.ReactNode
  image: string | undefined
}
export const AdaptativeBackground: React.FC<AdaptativeBackgroundProps> = ({
  children,
  image,
}) => {
  const [color, setColor] = useState('#ffffff')
  useDominantColor({ url: image, setColor })

  return (
    <motion.div
      variants={backgroundVariants}
      initial='initial'
      animate={{
        ...backgroundVariants.animate,
        backgroundColor: `${color}66`,
      }}
      exit='exit'
    >
      <div className='container mx-auto flex h-screen items-center justify-center'>
        <motion.main
          className='relative h-screen max-h-[70%] w-screen max-w-[70%] rounded-3xl text-white'
          variants={pokemonBackgroundVariants}
          initial='initial'
          animate={{
            ...pokemonBackgroundVariants.animate,
            backgroundColor: `${color}99`,
            scale: 1.05,
          }}
          exit='exit'
        >
          <motion.div
            className='clip-bg-path absolute left-0 top-0 h-full w-full rounded-3xl'
            variants={pokemonBackgroundVariants}
            initial='initial'
            animate={{
              ...pokemonBackgroundVariants.animate,
              backgroundColor: `${color}CC`,
            }}
            exit='exit'
          />
          {children}
        </motion.main>
      </div>
    </motion.div>
  )
}
