import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import FotoTierra from '../public/fotos/tierra2.png';
import Image from 'next/image';

const Section1 = () => {
  return (
    

<section className="flex items-center justify-center py-10 w-full pt-7 pb-7 md:pt-20 md:pb-24 mt-10">
    <div className="relative max-w-3xl px-10 text-center items-center content-center  auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">

            
            <div className="flex justify-between">
                <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                  Que es
                    <span className="">Biochar?</span>
                </h1>
            </div>
            
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96"/>
            </div>
        </div>

       
        <div className="my-16 border-b border-gray-300 lg:my-24"></div>

        
        <h2 className="  xl:text-xl mb-10 text-justify">
        El Biochar es un material de carbono sólido y poroso, producto de la Pirólisis, que es un proceso de conversión termoquímica de biomasa a 700 °C en una atmósfera desprovista de oxígeno y puede usarse como acondicionador de suelos agrícolas para <a className='text-green-600 font-extrabold'> regenerar y potenciar sus funciones biogeoquímicas</a>.
        </h2>

        <div className=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20 mb-[4rem] md:mb-[8rem] md:h-96">
        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>

            </div>

              <h2 className='md:text-5xl text-3xl mb-[6rem] mt-10 text-green-600'>Reinvención de un conocimiento ancestral </h2>


            <h2 className="text-justify xl:text-xl mb-[5rem] md:mb-[6rem] ">
           Varios estudios arqueológicos encontraron <a className='text-green-600 font-extrabold'> Antrosoles</a> (suelos modificados por el hombre) con carbono de más 2.500 años de antigüedad, los aborígenes amazónicos beneficiaron así su producción de alimentos. El biochar es una técnica ancestral reinventada con ciencia y tecnología moderna y se ha también calculado su durabilidad en el suelo por al menos 100 años.
        </h2>

        
        <div className=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20 mb-[7rem] md:mb-[8rem] md:h-96">
        <Image src={FotoTierra} />

            </div>
        
            <h2 className='md:text-5xl text-3xl mb-[6rem] mt-[6rem] text-green-600'>¡Aún estamos a tiempo para actuar! </h2>


<h2 className="text-left xl:text-xl mb-[5rem] md:mb-[6rem] ">
Heredamos el único planeta que conocemos capaz de albergar vida: *La Tierra*. Con el inicio de la *revolución industrial* avanzamos hacia la civilización que conocemos hoy y la humanidad se volvió dependiente a la extracción y quema de combustibles fósiles y a la sobreexplotación del suelo, el carbono liberado como *gases de efecto invernadero* se ha acumulado en la atmósfera, modificando el clima global, encaminando a la vida en la tierra a una inminente *sexta extinción masiva*.
Aún estamos a tiempo de actuar, *el suelo es un depósito natural de carbono*, si lo manejamos regenerativamente puede retirar y almacenar gran parte del excedente carbono atmosférico.

</h2>

        
       
    </div>
</section>

    
  )
}

export default Section1