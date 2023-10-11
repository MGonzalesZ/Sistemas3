import React from 'react';

import DeporteItem from './components/Canchas/DeporteItem';
import App from './App';
import Canchas from './components/Canchas/Canchas';
import Plataforma from './components/PlataformaAtencion/Plataforma';
import ClinicaDental from './components/ConsultorioDental/ClinicaDental';
import NAFpage from './components/NAF/NAFpage';
import Principal from './Principal';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function PruebaRouter() {
  return (
    <>
      <Router>
        <Routes>
          {/* MGonzalesZ */}
          <Route path="/" element={<Principal />} />
          <Route path="/Canchas" element={<Canchas />} />
          <Route path="/deporte" element={<DeporteItem />} />
          <Route path="/PlataformaAtencion" element={<Plataforma />} />
          <Route path="/ConsultorioDental" element={<ClinicaDental />} />
          <Route path="/NAF" element={<NAFpage />} />
          <Route path="/Fotocopiadora" element={<DeporteItem />} />

          {/* Fermin */}
          {/* Kael */}
          {/* Mauricio Garcia */}
          {/* Rene */}
          {/* Lucia */}
        </Routes>
      </Router>
    </>
  );
}
