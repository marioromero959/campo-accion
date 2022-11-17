import styled from "styled-components";

const StyleSvc = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:20px;
    p{
        display:flex;
        align-items:center;
        text-align:center;
        width:200px;
        height:200px;
        border:2px solid var(--primary);
        padding:20px;
        margin:0;
        border-radius:50%;
        transition:1s;
        :hover{
            background-color:var(--primary);
            color:white;
        }
    }
`


export default function Services({services}) {

    const opciones = ["Contratación por proyecto temporal", "Contratación para desarrollo contínuo del área", "Contratacíon por hora"];

    

    return (
        <>
            <h2>COMO TRABAJAMOS</h2>
            <h4>Nuestras opciones</h4>
            <StyleSvc>
                {opciones.map((opcion)=>(
                    <p>{opcion}</p>
                ))}
            </StyleSvc>
        </>
    )
}