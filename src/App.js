import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Fecha from './components/Ejemplo/Fecha';
import Canchas from './components/MGonzalesZ/Canchas';
import DeporteItem from './components/MGonzalesZ/DeporteItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <div>
        <h2>GRUPO SISTEMAS</h2>
        <Canchas />
        <br></br>
        <Fecha></Fecha>
      </div>

      <BrowserRouter>
        <div>
          <main className="mainApp">
            <Routes>
              <Route path="/deportes/1" element={<Canchas />} />
              <Route path="/deportes/2" element={<DeporteItem />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
