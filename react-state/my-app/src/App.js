import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="JavaScript" color="pink" />
      <ToggleButton text="HTML" color="lightgreen" />
      <ToggleButton text="CSS" color="lightblue" />
    </div>
  );
}

export default App;
