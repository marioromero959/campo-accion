import { useState, useEffect } from "react";
import styled from "styled-components";

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
`;

export default function Card({ tasks }) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(tasks);
  }, []);

  const openSubMenu =  (task) =>{
    console.log("a",task);
  }

  return (
    <>
      <StyledCardContainer>
        {task?.map((task) => (
          <StyledCard  onClick={()=>openSubMenu(task)} key={task}>{task}</StyledCard>
        ))}
      </StyledCardContainer>
    </>
  );
}
