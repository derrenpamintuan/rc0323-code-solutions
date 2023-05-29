import './App.css';
import PokimonList from './PokimonList';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function App() {
  return (
    <div className="App">
      <PokimonList pokedex={pokedex}/>
    </div>
  );
}

export default App;
