import React from 'react';
import { motion, useAnimation } from 'framer-motion';

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

        
        <h2 className="text-left  xl:text-xl mb-10">
        El Biochar es un material de carbono sólido y poroso, producto de la Pirólisis, que es un proceso de conversión termoquímica de biomasa a 700 °C en una atmósfera desprovista de oxígeno y puede usarse como acondicionador de suelos agrícolas para <a className='text-green-600'> regenerar y potenciar sus funciones biogeoquímicas</a>.
        </h2>

        <div className=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20 mb-[4rem] md:mb-[8rem] md:h-96">
        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>

            </div>

            <h2 className="text-left xl:text-xl mb-[4rem] md:mb-[6rem] ">
           <a className='text-green-600'>El biochar es resistente a la descomposición</a>, varios estudios arqueológicos han encontrado suelos antropológicos modificados con carbono de 3.000 años de antigüedad, <a className='text-green-600'> beneficiando así a la producción agrícola mientras se almacena carbono en los suelos</a> y se evita su mineralización a CO2 atmosférico. El Biochar constituye una solución para la seguridad alimentaria y la mitigación del calentamiento global.
        </h2>

        <div className=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20  md:h-96">
        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>

            </div>
       
    </div>
</section>

    
  )
}

export default Section1