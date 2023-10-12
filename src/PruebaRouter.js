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

import DepZFutsal from './components/Canchas/DepZFutsal';
import DepZVolley from './components/Canchas/DepZVolley';
import DepZBasquet from './components/Canchas/DepZBasquet';
import PaginaHorarios from './components/Horarios/PaginaHorarios';
import BarraPrincipal from './BarraPrincipal';

export default function PruebaRouter() {
  return (
    <>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <Routes>
          <Route path=" " element={<BarraPrincipal />} />
          <Route exact path="/Sistemas3" element={<BarraPrincipal />} />
          <Route path="/Canchas" element={<Canchas />} />
          <Route path="/futsal" element={<DepZFutsal />} />
          <Route path="/volley" element={<DepZVolley />} />
          <Route path="/basquet" element={<DepZBasquet />} />
          <Route path="/PlataformaAtencion" element={<Plataforma />} />
          <Route path="/ConsultorioDental" element={<ClinicaDental />} />
          <Route path="/ConsultorioDental/about" element={<About />} />
          <Route path="/ConsultorioDental/services" element={<Servicios />} />
          <Route path="/Fotocopiadora" element={<Fotocopiadora />} />
          <Route path="/NAF" element={<NAFpage />} />
          <Route path="/Horarios" element={<PaginaHorarios />} />
        </Routes>
      </Router>
    </>
  );
}
