export default function PokimonList({pokedex}) {

  const listOfPokimon = pokedex.map(pokimon =>
  <li key={pokimon.number}>{pokimon.name}</li>)

  return (
    <>
    <ul>
      {listOfPokimon}
    </ul>
    </>
  )
}
