import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="I" color="red" weight={100} />
      <CustomButton text="know" color="green" />
      <CustomButton text="React!" color="blue" />
    </div>
  );
}

export default App;
