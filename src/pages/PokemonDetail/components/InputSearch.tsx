import { defaultVariants, prefetchPokemon } from '@/helpers'
import { useQueryClient } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const InputSearch: FC = () => {
  const queryClient = useQueryClient()
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState(false)
  const navigate = useNavigate()

  const onSearch = (): void => {
    if (queryClient.getQueryData(['pokemon', search])) {
      inputError && setInputError(false)
      navigate(`/pokedex/detail/${search}`)
    } else {
      prefetchPokemon({ id: search, queryClient })
      setTimeout(() => {
        if (queryClient.getQueryData(['pokemon', search])) {
          inputError && setInputError(false)
          navigate(`/pokedex/detail/${search}`)
        } else {
          if (Number(search) > 1010 || Number(search) < 1) return
          setInputError(true)
        }
      }, 700)
    }
  }

  const handleSearchButton = (): void => {
    if (search === '') return
    onSearch()
  }

  interface KeyboardEvent {
    key: string
  }
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (search === '') return
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        layoutId='search-input'
        key='search-input'
        className={`flex rounded-lg duration-500 ease-in-out hover:ring-2 hover:ring-blue-200 ${
          inputError && 'ring-1 ring-red-300 hover:ring-2 hover:ring-red-300'
        }`}
      >
        <motion.input
          className='w-full rounded-bl-lg rounded-tl-lg border border-gray-100 bg-gray-100 px-4 py-1 font-normal outline-none'
          placeholder='Search by Name or ID'
          type='text'
          value={search}
          onChange={({ target: { value } }) => {
            if (Number(value) > 1010) return
            if (value[0] === '0') value = value.slice(1)
            setSearch(value)
            if (value === '') return
            if (isNaN(Number(value))) return
            prefetchPokemon({ id: value, queryClient })
          }}
          onKeyDown={handleKeyDown}
        />
        <motion.button
          className='rounded-br-lg rounded-tr-lg bg-[#2C40B5cb] px-4 py-1 text-white'
          variants={defaultVariants}
          initial='hidden'
          animate='visible'
          whileHover={{
            fontSize: '17px',
            transition: { duration: 0.3 },
          }}
          onClick={handleSearchButton}
        >
          Go!
        </motion.button>
      </motion.div>

      {inputError && (
        <motion.p
          className='ml-2 mt-1 text-sm text-red-800'
          variants={defaultVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          layoutId='search-error'
          key='search-error'
        >
          Pokemon not found
        </motion.p>
      )}
    </AnimatePresence>
  )
}
