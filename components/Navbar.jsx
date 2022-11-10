import styles from './../styles/Navbar.module.css'

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
           <img src="/icono.ico" alt="" />
           Campo Acción
          </li>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
