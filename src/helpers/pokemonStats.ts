type PokemonStats = Record<string, { name: string; color: string }>

export const pokemonStats: PokemonStats = {
  hp: { name: 'HP', color: '#FF3B30cb' },
  attack: { name: 'Attack', color: '#FF9500cb' },
  defense: { name: 'Defense', color: '#FFCC00cb' },
  'special-attack': { name: 'Sp. Atk', color: '#4CD964cb' },
  'special-defense': { name: 'Sp. Def', color: '#5AC8FAcb' },
  speed: { name: 'Speed', color: '#007AFFcb' },
}
