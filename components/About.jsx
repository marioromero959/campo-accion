import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyleLayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: var(--primary);
  align-items: center;
  padding: 40px;
`;
const StyleParagraph = styled.p`
  color: #fff;
`;
const StyleTeam = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  box-shadow: 5px 5px 10px;
  width: 300px;
  text-align: center;
  max-width: 300px;
  border-radius:15px;
  img{
    border-radius:15px;
    height:200px;
    margin:10px 0;
  }
`;

export default function About(props) {
  const [team, setTeam] = useState(props.team);

  return (
    <>
      <h1>¿QUIÉNES SOMOS?</h1>
      <StyleLayoutContainer>
        <img
          src={`assets/campo_accion.png`}
          alt=""
          style={{ width: "30em", padding: "10px  100px" }}
        />
        <div style={{ width: "50%" }}>
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
      <h2>Nuestro Equipo</h2>
      <div
        style={{
          width: "100%",
          margin:"20px 0",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        {team?.map((person) => (
          <StyleTeam key={person.name}>
            <h3 style={{ margin: 0 }}>{person.name}</h3>
            {/* {person.long_description} */}
            <Image width="200" height="200" src={person.img} alt={person.img} />
            {person.short_description}
          </StyleTeam>
        ))}
      </div>
    </>
  );
}
