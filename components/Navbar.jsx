import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {/* <img src="/icono.ico" alt="Campo Acción - Consultora" /> */}
            <p className="m-0">Campo Acción</p> 
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end px-4">
              <li className="nav-item px-2 fs-5">
                <Link className="nav-link" href="/">Inicio</Link>
              </li>
              <li className="nav-item px-2 fs-5">
                <Link className="nav-link" href="/about">Sobre Nosotros</Link>
              </li>
              <li className="nav-item px-2 fs-5 dropdown">
                <Link className="nav-link" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item px-2 fs-5">
                <Link className="nav-link" href="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
