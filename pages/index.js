import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import About from "../components/About";

export default function Home() {
  const router = useRouter();
  const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
  const team = [
    {
      name:'Verónica Kulman',
      short_description:' Docente y Mediadora especialista en gestión y resolución de Conflictos.',
      long_description:'',
      img:'/assets/vero.jpeg',
      talents:['Comunicadora', 'Metódica', 'Positiva','Creativa', 'Resolutiva',
        'Enfocada', 'Carismática', 'Empatica']
    },
    {
      name:'Agustin Barriola',
      short_description:'Médico Veterinario Rural.',
      long_description:'',
      img:'/assets/agustin.jpeg',
      talents:['Iniciativa', 'Aprendizaje activo', 'Liderazgo',' Sentido crítico',
        'Resolución de problemas', 'Flexibilidad']
    },
    {
      name:'Jeremías Bizín',
      short_description:'Ingeniero Zootecnista (actualmente formandose como Coaching empresarial).',
      long_description:'',
      img:'/assets/jere.jpeg',
      talents:['Liderazgo','Estratégico', 'Analítico','Actitud positiva y de servicio',' Agilidad', 'Prudente']
    },
  ];
  const services = [
    "Servicios",
    "RR.HH",
    "Compilance Corporativo",
    "Consultoría y Gestión agropecuaria",
  ];

  return (
    <PageLayout>
      <div className={styles.container}>
        {/* <h1>Campo Acción</h1> */}
        <Carousel images={images} autoplay={true} />
        <div>
          <p style={{ display: "flex", textAlign: "center", padding: "3em", paddingBottom:"0"}}>
            Nuestra consultora se forma en la búsqueda por dar soluciones a los
            vacíos generados por la automatización que experimentamos en la vida
            laboral, con el único interés de alejarnos de las respuestas cada
            vez más repetitivas y/u obsoletas y centrarnos en los resultados del
            bienestar laboral.
          </p>
        </div>
        <div>
          <Card tasks={services}></Card>
        </div>
        <p style={{ display: "flex", textAlign: "center", padding: "2em" }}>
          Luego de algunos años decidimos potenciar nuestras habilidades y
          ponerlas al servicio de las demandas laborales, conscientes de la
          importancia de encontrar una cultura organizacional más adecuada a
          nuestro estilo y visión de negocio
        </p>
        <About team={team}></About>
        {/* esto es como usar el router en angular */}
        {/* <button onClick={()=> router.push('/about')}> */}
        {/* Navegar */}
        {/* </button> */}
      </div>
    </PageLayout>
  );
}
