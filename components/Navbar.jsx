import Link from "next/link";
import styled from "styled-components";
import { useState,useEffect } from "react";

const StyledCardContainer = styled.nav`
  display: flex;
  width: 100%;
  background-color:transparent;
  position:fixed;
  z-index:1;
  transition:1s;
  

  p,a{
    color:#fff;
  }
  .nav-link{
    transition:1s;
  }
  .nav-link:hover{
    color:#fff;
    background-color:#000;
  }
  &.scrolled{
    transition:1s;
    background-color:#fff;
    p,a{
      color:#000;
    }
  }
  @media (max-width:480px) {
    .navbar-brand p{
      font-size:15px !important;
    }
  }
`;

export default function Navbar() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [logo, setLogo] = useState('/assets/logo-blanco.png');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    (position > 0) ? setLogo('/assets/logo-negro.png') : setLogo('/assets/logo-blanco.png');
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
      <StyledCardContainer className={`navbar navbar-expand-lg p-4 ${(scrollPosition > 0) ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex" href="/">
            <img style={{width:"40px"}} src={logo} alt="Campo Acción - Consultora" />
            <p className="m-2">Campo Acción</p> 
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
              {/* <li className="nav-item px-2 fs-5 dropdown">
                <Link className="nav-link" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item px-2 fs-5">
                <Link className="nav-link" href="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </StyledCardContainer>
    </>
  );
}
