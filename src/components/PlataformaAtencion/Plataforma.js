import Titulo from '../UI//Tittle';

import Doubleb from '../UI/DoubleButton';
import Card1 from '../UI/Tarjeta1';
import Paraf from '../UI/Paraf';
import C2r from '../UI/Tarjeta2r';
import C2l from '../UI/Tarjeta2l';
import ConCar from './ConjuntoCartas';
import Footer from '../UI/Footer';
import BarraPrincipal from '../../BarraPrincipal';
import MTitulo from '../UI/MTitulo';
import MFooter from '../UI/MFooter';

function Plataforma() {
  const fstyle = {
    fontSize: '60px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const fstyle2 = {
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };

  return (
    <div>
      <BarraPrincipal titulo="Plataforma de atencion" />

      <Card1
        titulo="Bienvenido"
        desc="Estamos encantados de darte la bienvenida a nuestro espacio virtual diseñado exclusivamente para satisfacer tus necesidades académicas y brindarte el apoyo que necesitas durante tu trayecto educativo."
        nombre="Ir al siu"
        src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />

      <C2l
        titulo="Plan de Pagos"
        desc="Descubre nuestro flexible plan de pagos universitarios. ¡Educa sin preocupaciones!"
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <C2r
        titulo="Inscripciones"
        desc="Inscripciones abiertas: ¡Prepárate para tu futuro académico en Univalle"
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <C2l
        titulo="Carreras"
        desc="Explora nuestras emocionantes carreras universitarias. ¡Elige tu camino!"
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <C2r
        titulo="Credenciales"
        desc="Consigue tus credenciales de entrada a Univalle hoy mismo."
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <C2l
        titulo="Solvencia"
        desc="Asegura tu solvencia en Univalle Tu inversión en el futuro."
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <C2r
        titulo="Horarios"
        desc="Revisa los horarios para visitarnos."
        nombre="Ver mas"
        image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />

      <Titulo titulo="Contactos" fontstyle={fstyle2} />
      <Paraf desc="¿Necesitas ayuda o información? Contáctanos para asistencia personalizada en Univalle. Estamos aquí para ayudarte." />

      <ConCar />

      <MFooter />
    </div>
  );
}

export default Plataforma;
