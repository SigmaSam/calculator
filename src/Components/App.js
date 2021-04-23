import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// Comented because even if it is a requiremente it will cause a linter error if I dont use it.
// import calculate from '../Logic/calculate';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
