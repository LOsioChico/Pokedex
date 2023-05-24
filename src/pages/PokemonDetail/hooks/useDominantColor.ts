import { getDominantColor } from '@/helpers'
import { useEffect } from 'react'

interface UseDominantColorProps {
  url: string | undefined
  setColor: (color: string) => void
}

export const useDominantColor = ({
  url = '',
  setColor,
}: UseDominantColorProps): void => {
  useEffect(() => {
    void getDominantColor(url).then((color) => {
      setColor(color)
    })
  }, [url, setColor])
}
