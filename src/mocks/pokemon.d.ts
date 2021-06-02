
interface PokemonStat {
  name: string
  base_stat: number
}

interface PokemonType {
  name: string
  image: string
}

interface Pokemon {
  id: number
  name: string
  image: string
  types: PokemonType[]
  weight: number
  height: number
  stats: PokemonStat[]
}
