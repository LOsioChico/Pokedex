import ColorThief from 'color-thief-ts'

const colorThief = new ColorThief()

export const getDominantColor = async (url: string): Promise<string> => {
  return await colorThief.getColorAsync(url)
}
