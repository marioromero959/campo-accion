import Head from "next/head"
import Navbar from "./Navbar"

export default function PageLayout({children}){

    return (
        <>
            <Head>
            <title>Campo Acción - Consultora</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/icono.ico" />
            </Head>
            <header>
                <Navbar/>
            </header>
            <main>
                {/* children son los componentes que tenemos dentro de la etiqueta de layout, como el router outlet en angular */}
                {children}
            </main>
            {/* Esta es una forma de aplicar los estilos, solo en este componente */}
            {/* <style jsx>{`
                header Navbar{
                    min-width:100%;
                    display:flex;
                    justify-content:center;
                    padding:0;
                }            
            `}
            </style> */}
        </>
    )
}