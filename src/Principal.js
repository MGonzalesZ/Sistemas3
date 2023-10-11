import Navbarra from './components/UI/NavBarra';

function Principal() {
  const links = [
    { url: '/PlataformaAtencion', text: 'Plataforma Atencion' },
    { url: '/ConsultorioDental', text: 'Consultorio' },
    { url: '/Canchas', text: 'Canchas' },
    { url: '/NAF', text: 'NAF' },
    { url: '/Fotocopiadora', text: 'fotocopiadora' },
  ];
  return (
    <div>
      <Navbarra title="Sistema de informacion" links={links} />
    </div>
  );
}

export default Principal;
