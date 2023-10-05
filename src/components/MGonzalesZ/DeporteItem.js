import React from 'react';

import deportesImg from './img/Univ.jpg'
import './DeporteItem.css'
import Fecha from '../Ejemplo/Fecha';

const DeporteItem = () => {
    return (
        <div className="deporte">
          <br/>
      <h2>FUTSAL</h2>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
            <img src={deportesImg} alt="IMAGEN FUTSAL"/>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h4>Ubicación</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
            suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
            feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
            ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
            vel.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
            suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
            feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
            ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
            vel.</p>
        </div>
        <div className="col-1"></div>
      </div>
      <br/><br/>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
            <h4>Ubicación</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.897736613437!2d-68.13097295218753!3d-16.502129045736044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f212477bb26cb%3A0x36db2efb4300a924!2sCampus%20Deportivo%20Univalle!5e0!3m2!1ses!2sbo!4v1696532805056!5m2!1ses!2sbo" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
            <h4>Requisitos</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit.</p>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
            <h4>Horarios</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. </p>
            <h4>Contacto</h4>
            <div className="row">
              <div className="col-6">
                <img src={deportesImg} width="100%"></img>
              </div>
              <div className="col-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>            
        </div>
        <div className="col-1"></div>
      </div>
      <Fecha></Fecha>
    </div>
    )
};
export default DeporteItem;
