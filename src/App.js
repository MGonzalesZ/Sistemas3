import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Fecha from './components/Fecha';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h2>GRUPO SISTEMAS</h2>
        <ExpenseItem></ExpenseItem>
        <Fecha></Fecha></div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
