import './App.css';
import HomePage1 from './HomePage1';
import HomePage2 from './HomePage2';


const PROTOTYPE_VERSION = 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { PROTOTYPE_VERSION === 1 ? (<HomePage1/>) : (<HomePage2/>)}
      </header>
    </div>
  );
}

export default App;
