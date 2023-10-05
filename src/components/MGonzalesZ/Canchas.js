import React from 'react';
import './Canchas.css';

const Canchas = () => {
  return (
    <div>
      <h2>CANCHAS</h2>
      <div className="row">
        <div className="col-4">PRIMERA COLUMNA</div>
        <div className="col-8">SEGUNDA COLUMNA </div>
      </div>
      <div className="row">
        <h3>Deportes</h3>
        <div className="col"></div>
        <div className="col deporte-item">
          <img />
          IMAGEN
        </div>
        <div className="col"></div>

        <div className="col deporte-item">
          <img />
          IMAGEN
        </div>
        <div className="col"></div>
        <div className="col deporte-item">
          <img />
          IMAGEN
        </div>
        <div className="col"></div>
        <div className="col deporte-item">
          <img />
          IMAGEN
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Canchas;
