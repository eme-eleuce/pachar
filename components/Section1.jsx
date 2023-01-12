import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Section1 = () => {
  return (
    

<section class="flex items-center justify-center py-10 w-full pt-7 pb-7 md:pt-20 md:pb-24 mt-10">
    <div class="relative max-w-3xl px-10 text-center  auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">

            
            <div class="flex justify-between mr-10">
                <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                  Que es
                    <span class="">Biochar?</span>
                </h1>
            </div>
            
            <div class="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" class="object-cover mt-3 mr-5 h-80 lg:h-96"/>
            </div>
        </div>

       
        <div class="my-16 border-b border-gray-300 lg:my-24"></div>

        
        <h2 class="text-left text-gray-500 xl:text-xl mb-10">
        Material sólido y poroso alto en carbono orgánico hecho a partir de biomasa residual a temperaturas entre 300-700 °C en una atmósfera sin oxígeno.
        </h2>

        <div class=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20 mb-[4rem] md:mb-[8rem] md:h-96">
        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>

            </div>

            <h2 class="text-left text-gray-500 xl:text-xl mb-[4rem] md:mb-[6rem] ">
            Este material es resistente a la descomposición biológica y puede usarse, entre otras aplicaciones, como enmienda para suelos agrícolas, regenerando o potenciando sus funciones biogeoquímicas.
        </h2>

        <div class=" top-0 right-0 h-64 mt-12 md:-mt-16 p-2  pr-5 xl:pl-16 xl:pr-20  md:h-96">
        <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>

            </div>
       
    </div>
</section>

    
  )
}

export default Section1