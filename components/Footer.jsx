import styled from "styled-components";

const StyleSvc = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap:
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    padding:20px;
    background-color:black;
    p{
        font-size:15px !important;
        margin:0;
        color:#fff;
    }
    div{
        color:#787a7b;
    }
  @media (max-width:900px) {
        flex-direction:column;
        align-items:flex-start;
        p{
            font-size:13px !important;
        }
    }
`


export default function Footer() {

    return (
        <>
            <StyleSvc>
                <p>Direccion: 1er Entrerriano 110, Gualeguay Entre Ríos</p>
                <p>Mail: campoaccionconsultora@gmail.com</p>
                <p>Teléfonos: 3444439570 / 3412103956</p>
            </StyleSvc>
            <StyleSvc>
                <div>©2022 CA-Consultora. Todos los derechos reservados. | Powered by M&M</div>
            </StyleSvc>
        </>
    )
}