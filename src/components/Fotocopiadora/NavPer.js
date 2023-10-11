export function NavPer() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-lg-4"
      id="mainNav"
      style={{ backgroundColor: '#762d3d' }}
    >
      <div className="container">
        <a
          href="/#inicio"
          className="navbar-brand text-uppercase fw-bold d-lg-none"
        >
          Fotocopiadora
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase" href="/#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase" href="/#nosotros">
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase" href="/#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase" href="/#horario">
                Horarios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
