import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const StyleTeam = styled.div`
    display:flex;
    width:80%;
    height:400px;
    align-items:center;
    justify-content:space-around;
    box-shadow:0px 0px 10px;
    margin:5px 0;
    h3{
        font-weight:600;
        font-size:35px;
        order:1;
        color:var(--primary);
    }
    p{
        font-size:25px !important;
        width:400px;
        order:2;
    }
    div{
        order:3;
        position:relative;
        width:20%;
        height:300px;
        border:5px solid var(--primary);
        border-radius:50%;
        img{
        border-radius:50%;
            z-index:-1;
        }
    }
    &:nth-child(2n+1){
        h3{order:3;}
        p{order:2;}
        div{order:1;}
    }
    @media (max-width:1100px) {
        width:50%;  
        text-align:center;
        flex-direction:column;
        h3{order:1 !important;}
        div{
            width:40%;
            order:2;
        }
        p{
            padding:10px;
            width:auto;
            order:3;
        }
    }
    @media (max-width:900px) {
        width:80%;  
        div{
            width:50%;
            height:800px !important;
        }
    }

`;


export default function CardTeam({ person }) {
    return (
        <>
            <StyleTeam>
                <h3>{person.name}</h3>
                <p>{person.short_description}</p>
                <div>
                    <Image fill="true" src={person.img} alt={person.img} />
                </div>
            </StyleTeam>
        </>
    )
}