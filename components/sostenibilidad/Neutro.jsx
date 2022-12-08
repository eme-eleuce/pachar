import React from 'react';
import Head from 'next/head'

const Neutro = () => {
  return (
    <>
    <Head>
        <title>Neutralidad del carbono</title>
        <link rel="icon" href="./logo/logo3.png" />
    </Head>
    <div>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      
      <h1 className='text-center text-4xl py-10 mb-16'> Neutralidad del Carbono </h1>
      
  
      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img
            alt="Party"
            src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            class="absolute inset-0 h-[40rem] w-[40rem] object-cover"
          />
        </div>
  
        <div class="lg:py-16">
          <div class="space-y-4 text-gray-600 text-lg md:text-xl text-justify">
           
           <p>
                    
           La vida en la tierra esta enfrentando una sexta extinción masiva, esta vez de origen antropológico, es decir,
causada por la actividad humana, principalmente por la modificación atmosférica que hemos ocasionado
durante los últimos 150 años por la quema de combustibles fósiles. Varios estudios afirman que la tierra
tiene la capacidad de regenerarse hasta el año 2030 si reducimos paulatinamente las emisiones de gases
de efecto invernadero (GEI), principalmente Dióxido de Carbono (CO2) y Metano (CH4).
Los sistemas agrícolas y ganaderos industriales son los segundos contribuyentes globales de las emisiones
de GEI, causado por el mal manejo que se la da un recurso de vital importancia: EL SUELO, que es la base
de las cadenas alimenticias, tiene la capacidad de producir alimentos suficientes y junto con las plantas y
microrganismos capturar bajo la superficie cantidades colosales de carbono.
            
           </p>
   <p>
    Un suelo rico en carbono es
un suelo rico en materia orgánica y microbiología, por ende, un suelo fértil; el carbono llega de forma
natural al suelo (como se explica mas adelante) pero en sistemas de producción comerciales, donde se
realiza arado profundo, quemas superficiales rotativas, aplicación de sustancias toxicas para la biología
como pesticidas o fertilizantes salinos, el suelo pierde su “vida” y su “carbono natural” creando
dependencia a fertilizantes inorgánicos; sin embargo estos procesos degenerativos son reversibles, con
buenas prácticas de agricultura permanente o regenerativa, devolviendo la vida al suelo mediante
aplicaciones de materia orgánica, abonos naturales, biocarbón y microbiología, el suelo puede recuperar
su capacidad natural de reciclar nutrientes y balancear su ecología, reduciendo así la necesidad de
fertilizantes y pesticidas.
   </p>
            <p>
           
Un manejo regenerativo y una transición ecológica de los suelos en sistemas agropecuarios genera que se
vuelvan más productivos, rentables y de igual importancia: sostenibles ambientalmente, ayudando a que
la agricultura vuelva a ser una actividad de captura de carbono, vital para mitigar el calentamiento global.
            </p>
            <p>Lo invitamos a ver el documental “Kiss the ground” (Besa el suelo, 84 minutos) disponible en: 
               <p> <a href='https://www.netflix.com/es/title/81321999?s=a&amp;trkid=13747225&amp;t=cp&amp;vlang=es&amp;clip=81323736'
          target={"_blank"}
          rel={"noreferrer"} 
          className='underline text-green-700 font-bold'>
             Netflix - Kiss the ground</a>
             </p>
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Neutro