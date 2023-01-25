import Head from 'next/head'
import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

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
       
        Ser la empresa líder en el Ecuador para la gestión de biomasa, remoción de carbono atmosférico y agricultura regenerativa, procesando conjuntamente <a className='text-green-600 font-bold'>2.000 toneladas </a> anuales de Biochar y Compost, removiendo así <a className='text-green-600 font-bold'>6.000 toneladas </a>de CO2eq y regenerando a su vez el carbono orgánico de <a className='text-green-600 font-bold'>500 hectáreas</a> de suelo al año.
        
       </p>
       </div>
       <div className=" mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-4">
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={2000}
  duration={2}
  delay={2}
  suffix=" tn"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
            Biochar y Compost
          </p>
        </div>
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={6000}
  duration={2}
  delay={2}
  suffix=" tn"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
           CO2
          </p>
        </div>
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={500}
  duration={2}
  delay={2}
  suffix=" ha"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
            Carbono organico
          </p>
        </div>

        <div className="text-center md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={500}
  duration={2}
  delay={2}
  suffix=" ha"
> </CountUp>
          </h6>
          <p className="text-md font-bold  tracking-widest text-gray-800 uppercase lg:text-base">
            Carbono organico
          </p>
        </div>
        
      </div>
    </div>
    

        
        
    </>
  )
}

export default Empresa