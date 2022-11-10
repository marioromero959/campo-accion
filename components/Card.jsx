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
  margin: 20px;
  width: 10em;
  height: 150px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px;
  transition: 1s;
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

  return (
    <>
      <StyledCardContainer>
        {task?.map((task) => (
          <StyledCard key={task}>{task}</StyledCard>
        ))}
      </StyledCardContainer>
    </>
  );
}
