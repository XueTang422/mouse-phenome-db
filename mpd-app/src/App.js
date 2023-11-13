import logo from './logo.svg';
import './App.css';
import HomePage1 from './HomePage1';
import HomePage2 from './HomePage2';


const PROTOTYPE_VERSION = 2;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { PROTOTYPE_VERSION === 1 ? (<HomePage1/>) : (<HomePage2/>)}
      </header>
    </div>
  );
}

export default App;
