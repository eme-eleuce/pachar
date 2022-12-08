import Head from 'next/head'
import React from 'react'

const Empresa = () => {
  return (
    <>
        <Head>
        <title>Nuestra Empresa</title>
        <link rel="icon" href="./logo/logo3.png" />
       </Head>
        
       <div className='max-w-[800px] md:max-w-[1200px] mx-auto py-12'>

       <h1 className='font-bold text-4xl mb-4 py-10 mt-6 text-center'>

         Nuestra Empresa
       </h1>
       <p className='md:px-20 px-10 leading-relaxed'>

       <a className='text-green-600 font-bold '>Pacchar</a> es una startup de gestión de residuos, agricultura regenerativa y manejo inteligente del carbono que inició sus operaciones en 2021 afrontando la problemática del cambio climático y la mala gestión de residuos agropecuarios en la costa de Ecuador para crear productos sostenibles como el Biochar y El Compost, que tienen además valor social y ambiental.
       </p>

       <h1 className='font-bold text-3xl mb-4 py-10 mt-6 text-center'> Nuestra Mision </h1>
       <p className='md:px-20 px-10 leading-relaxed'> 
       
       Gestionar biomasa residual agropecuaria, procesarla con tecnologías sostenibles para crear productos y servicios de valor que beneficien a sistemas agropecuarios, a la sociedad y al medio ambiente mediante la implementación de modelos de economía circular y recarbonización del suelo.
        
       </p>

       <h1 className='font-bold text-3xl mb-4 py-10 mt-6 text-center'> Nuestra Vision</h1>
       <p className='md:px-20 px-10 leading-relaxed'> 
       
        Ser la empresa líder en el Ecuador para la gestión de biomasa, remoción de carbono atmosférico y agricultura regenerativa, procesando conjuntamente 2.000 toneladas anuales de Biochar y Compost, removiendo así 6.000 toneladas de CO2eq y regenerando a su vez el carbono orgánico de 500 Hectáreas de suelo al año.
        
       </p>
       </div>
        
        
    </>
  )
}

export default Empresa