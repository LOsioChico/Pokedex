declare module 'color-thief-ts' {
  export default class ColorThief {
    getColorAsync(url: string, quality?: number): Promise<string>
  }
}
