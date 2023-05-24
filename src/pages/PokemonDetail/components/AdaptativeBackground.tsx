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
    <div className={`bg-opacity-40 bg-[${color}]`}>
      <div className='container mx-auto flex h-screen items-center justify-center'>
        <main className='relative h-screen max-h-[70%] w-screen max-w-[70%] rounded-3xl bg-cyan-300 text-white'>
          {children}
        </main>
      </div>
    </div>
  )
}
