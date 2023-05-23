import './App.css';
import CustomButton from './CustomButton';

function App() {

  function handleCustomClick(text) {
    window.alert(text);
  }

  return (
    <div className="App">
      <CustomButton text="JavaScript" color="red" onCustomClick={handleCustomClick} />
      <CustomButton text="HTML" color="green" onCustomClick={handleCustomClick} />
      <CustomButton text="CSS" color="blue" onCustomClick={handleCustomClick} />
    </div>
  );
}

export default App;
