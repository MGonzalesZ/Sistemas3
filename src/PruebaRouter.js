import React from 'react';

import DeporteItem from './components/MGonzalesZ/DeporteItem';
import App from './App';
import Canchas from './components/MGonzalesZ/Canchas';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function PruebaRouter() {
  return (
    <>
      <Router>
        <Routes>
          {/* MGonzalesZ */}
          <Route path="/Sistemas3" element={<Canchas />} />
          <Route path="/deporte" element={<DeporteItem />} />
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
