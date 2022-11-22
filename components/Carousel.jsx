import { useEffect, useState } from "react"
import Image from 'next/image'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin:0;
    width:50px;
    padding:2px;
`;

const StyledCarouselImg = styled.img`
    position:absolute;
    height:100%;
    width:100%;
    opacity:0;
    transition:1s;
    &.loaded{
        opacity:.5;
    }
`;

const StyleP = styled.p`
    text-align:center;
    position:relative;
    font-size:30px;
    top:20em;
    left:10%;
    width:80%;
    color:#fff;
    @media (max-width:480px) {
        top:10em;
    }
`;

export default function Carousel(props){
    const [selectedIndex,setSelectedIndex] = useState(0) 
    const [selectedImage,setSelectedImage] = useState(props.images[0]) 
    const [loaded,setLoaded] = useState(false) 
    
    useEffect(()=>{
        if(props.autoplay){
            const interval = setInterval(()=>{
                setNewImage(selectedIndex,props.images)
            },3000)
            return () =>clearInterval(interval)
        }
    })

    const setNewImage = (index, images, next = true) =>{
        setLoaded(false)
        setTimeout(()=>{
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        },500)
    }

    const previous = () =>{
        setNewImage(selectedIndex,props.images, false)
    }
    const next = () =>{
        setNewImage(selectedIndex,props.images)
    }


    return (
        <>
        <div style={{ background:'#000',width:'100%', height:'100vh', position:'relative'}}>
            <StyledCarouselImg priority='true' src={`/assets/${selectedImage}`} alt="" fill="true" onLoad={()=>setLoaded(true)} className={loaded ? 'loaded' : ''}/>
            <StyleP>Nuestra consultora se forma en la búsqueda por dar soluciones a los
            vacíos generados por la automatización que experimentamos en la vida
            laboral, con el único interés de alejarnos de las respuestas cada
            vez más repetitivas y/u obsoletas y centrarnos en los resultados del
            bienestar laboral.</StyleP>
        </div>
        {/* <div className="buttons">
            <StyledButton onClick={previous}> {'<'} </StyledButton>
            <StyledButton onClick={next}> {'>'} </StyledButton>
        </div> */}
            <style jsx>{`
                .buttons{
                    width:15%;
                    // border:1px solid red;
                    display:flex;
                    justify-content:space-between;
                    flex-direction:row;
                    padding:20px;
                }            
                
            `}
            </style>
        </>

    )

}