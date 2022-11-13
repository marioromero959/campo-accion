import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import CardTeam from '../components/CardTeam';

const StyleLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  img{
    width:300px;
  }
  @media (max-width:900px) {
    img{
      width:100%;
    }
    flex-direction: column;
  }
`;
const StyleParagraph = styled.p`
  padding:10px 70px;
  max-width:40em;
  margin:0;
  color: #000;
  @media (max-width:900px) {
    padding:30px 20px;
  }
`;

export default function About(props) {
  const [team, setTeam] = useState(props.team);

  return (
    <>
      <h2 className="p-2">¿QUIÉNES SOMOS?</h2>
      <StyleLayoutContainer>
        <img
          src={`assets/campo_accion.png`}
          alt=""
        />
        <div>
          <StyleParagraph>
            Nos definimos como jóvenes creativos y emprendedores, que apostando
            a una formación educativa superior y continua, invertimos y
            trabajamos cada día de manera independiente al desarrollo de planes
            integrales de trabajo, con el foco puesto en lograr que en un mismo
            lugar nuestros clientes encuentren gestión profesional, resolutiva y
            eficaz sobre los recursos humanos o de capital.
          </StyleParagraph>
          <StyleParagraph>
            Nuestro objetivo es ayudar a las empresas a definir una estrategia
            para gestionar y generar soluciones cada vez más ágiles y adaptadas,
            interviniendo nuevas generaciones de profesionales, perspectivas
            innovadoras y un abordaje integral de la materia.
          </StyleParagraph>
        </div>
      </StyleLayoutContainer>
      <h2 className="p-4">NUESTRO EQUIPO</h2>
      <div
        style={{
          width: "100%",
          margin: "20px 0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        {team?.map((person) => (
          <CardTeam person={person} key={person.name}></CardTeam>
        ))}
      </div>

      {/* <p className="fs-5 p-5 w-100">
        Detrás de estos dos nombres hay una nómina fija de jóvenes
        tercerizando sus servicios profesionales. Ellos son en quienes nos
        apoyamos para brindar un servicio innovador, atractivo a la época y
        adaptado a cada cliente.
        Entre ellos contamos con un aspb
        <strong>
          Programador Java y Frontend, una
          Community Manager, un Veterinario, una Contadora Pública Nacional,
          una Licenciada en Medio Ambiente y una Licenciada Psicopedagogía y
          Psicología.
        </strong>
      </p> */}
    </>
  );
}
