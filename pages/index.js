import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const images = ["b1.jpg", "b2.jpeg", "b3.jpeg"];
  const team = [
    {
      name: 'Verónica Kulman',
      short_description: 'Abogada, Docente y Mediadora especialista en gestión y resolución de Conflictos.',
      long_description: '',
      img: '/assets/vero.jpeg',
      talents: ['Comunicadora', 'Metódica', 'Positiva', 'Creativa', 'Resolutiva',
        'Enfocada', 'Carismática', 'Empatica']
    },
    {
      name: 'Jeremías Bizín',
      short_description: 'Ingeniero Zootecnista (actualmente formandose como Coaching empresarial).',
      long_description: '',
      img: '/assets/jere.jpeg',
      talents: ['Liderazgo', 'Estratégico', 'Analítico', 'Actitud positiva y de servicio', ' Agilidad', 'Prudente']
    },
    {
      name: 'Agustin Barriola',
      short_description: 'Médico Veterinario Rural.',
      long_description: '',
      img: '/assets/agustin.jpeg',
      talents: ['Iniciativa', 'Aprendizaje activo', 'Liderazgo', ' Sentido crítico',
        'Resolución de problemas', 'Flexibilidad']
    }
  ];
  const menu = [
    "Equipo Profesional",
    "Servicios",
    "Como trabajamos",
    "Búsquedas laborales",
  ];


  return (
    <PageLayout>
      <div className={styles.container}>
        {/* <h1>Campo Acción</h1> */}
        <Carousel images={images} autoplay={true} />
        {/* <div>
          <p style={{ display: "flex", textAlign: "center", padding: "2em" ,fontWeight: "600"}}>
            Luego de algunos años decidimos potenciar nuestras habilidades y
            ponerlas al servicio de las demandas laborales, conscientes de la
            importancia de encontrar una cultura organizacional más adecuada a
            nuestro estilo y visión de negocio.
          </p>
        </div> */}
        <div>
          <Card tasks={menu}></Card>
        </div>
        {/* <About team={team}></About> */}
        {/* esto es como usar el router en angular */}
        {/* <button onClick={()=> router.push('/about')}> */}
        {/* Navegar */}
        {/* </button> */}

        <Footer></Footer>

      </div>
    </PageLayout>
  );
}
