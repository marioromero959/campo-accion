import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import 'animate.css';


const StyledCardContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  font-size:20px;
  margin: 20px;
  width: 15em;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px;
  transition: 1s;
  color:black;
  :hover{
    color: white;
    background-color:var(--primary);
  }
  &.actived{
    color: white;
    background-color:var(--primary);
  }
  @media (max-width:480px) {
    margin:20px 0;
  }
`;
const StyledMenuList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding:50px 0;
  a{
    border:1px solid var(--secondary);
    color:var(--primary);
    margin:0 5px;
    font-weight:600;
    font-size:20px;
    padding:20px;
    text-decoration:none;
  }
  @media (max-width:480px) {
    flex-direction:column;
    align-items: flex-start;
    a{
      margin:5px;
    }
}
`;

export default function Card({ tasks }) {
  const [task, setTask] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const [itemActive, setItemActive] = useState();

  const items = [
    [{ value: 'Nómina de profesionales', link: '/equipo-profesional/nomina' }],
    [
      { value: 'Gastión de capital humano', link: '/servicios/gestion-capital' },
      { value: 'Consultoría y gestión Agropecuaria', link: '/servicios/agropecuaria' },
      { value: 'Maneo de Redes Sociales y herramientas de comunicación', link: '/servicios/redes' }
    ],
    [
      { value: 'Contratación por proyecto temporal', link: '/como-trabajamos/proyecto-temporal' },
      { value: 'Contratación para desarrollo contínuo de áera', link: '/como-trabajamos/desarrollo-area' },
      { value: 'Contratación por hora', link: '/como-trabajamos/contratacion-hora' }
    ],
    [{ value: 'Bolsa de trabajo', link: '/busquedas/bolsa-trabajo' }, { value: 'Carga tu CV', link: '/busquedas/carga-cv' }]]

  useEffect(() => {
    setTask(tasks);
  }, []);

  const openSubMenu = (task, index) => {
    console.log(items[index]);
    setSubMenu(items[index])
    setItemActive(task)
  }

  return (
    <>
      <StyledCardContainer>
        {task?.map((task, index) => (
          <StyledCard onClick={() => openSubMenu(task, index)} key={task} className={(task == itemActive) ? 'actived' : ''}>{task}</StyledCard>
        ))}
      </StyledCardContainer>
      <StyledMenuList>
        {subMenu?.map((item) => (
          <Link className="animate__animated animate__fadeInDown" href={item.link} key={item.value}>{item.value}</Link>
        ))}
      </StyledMenuList>
    </>
  );
}
