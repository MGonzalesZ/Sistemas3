import logo from './logo.svg';
import './App.css';

// import Fecha from './components/Ejemplo/Fecha';
// import Canchas from './components/MGonzalesZ/Canchas';
// import DeporteItem from './components/MGonzalesZ/DeporteItem';
import PruebaRouter from './PruebaRouter';

function App() {
  return (
    <div className="App">
      {/* <div>
        <h2>GRUPO SISTEMAS</h2>
        <Canchas />
        <br></br>
        <Fecha></Fecha>
      </div> */}
      <header>
        <PruebaRouter />
      </header>
    </div>
  );
}

export default App;
