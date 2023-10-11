import logo from './logo.svg';
import './App.css';

// import Fecha from './components/Ejemplo/Fecha';
// import Canchas from './components/MGonzalesZ/Canchas';
// import DeporteItem from './components/MGonzalesZ/DeporteItem';
import PruebaRouter from './PruebaRouter';
import Principal from './Principal';

function App() {
  return (
    <div className="App">
      {/* <div>
        <h2>GRUPO SISTEMAS</h2>
        <Canchas />
        <br></br>
        <Fecha></Fecha>
      </div> */}

      <PruebaRouter />
      <Principal></Principal>
    </div>
  );
}

export default App;
