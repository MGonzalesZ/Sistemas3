import React from 'react';

import DeporteItem from './components/Canchas/DeporteItem';
import App from './App';
import Canchas from './components/Canchas/Canchas';
import Plataforma from './components/PlataformaAtencion/Plataforma';
import ClinicaDental from './components/ConsultorioDental/ClinicaDental';
import NAFpage from './components/NAF/NAFpage';
import Principal from './BarraPrincipal';
import Fotocopiadora from './components/Fotocopiadora/Fotocopiadora';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/ConsultorioDental/about';
import Servicios from './components/ConsultorioDental/services';

export default function PruebaRouter() {
  return (
    <>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Principal />} /> */}
          <Route path="/Canchas" element={<Canchas />} />
          <Route path="/deporte" element={<DeporteItem />} />
          <Route path="/PlataformaAtencion" element={<Plataforma />} />
          <Route path="/ConsultorioDental" element={<ClinicaDental />} />
          <Route path="/ConsultorioDental/about" element={<About />} />
          <Route path="/ConsultorioDental/services" element={<Servicios />} />
          <Route path="/Fotocopiadora" element={<Fotocopiadora />} />
          <Route path="/NAF" element={<NAFpage />} />
          <Route path="/Fotocopiadora" element={<Fotocopiadora />} />
          
        </Routes>
      </Router>
    </>
  );
}
