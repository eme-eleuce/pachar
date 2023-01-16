import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Section2 = () => {
  return (
    
    <section id='section2' className="w-full pt-7 pb-7 md:pt-20 md:pb-24 mt-10  " >
    <div className="box-border mb-8 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4  text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 10, x: 0 }}
              transition={{duration: 1, delay: 1}}
       
  >
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>
            </motion.div>
        </div>

        
        <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
        <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 0}}
       
  >
            <h2 className="m-0 text-xl text-green-600 font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-left">
            En Pacchar creamos valor a partir de residuos agroforestales
            </h2>
            </motion.div>
            <p className="pt-4 pb-8 mt-6 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Nuestras tecnologías de Pirólisis y Compostaje nos permiten producir biochar, compost y otros productos agroecológicos de alta calidad.
            </p>
           
        </div>
        
    </div>
    <div className="box-border mb-8 flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6  border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        
        <div className="box-border w-full text-green-600 border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Servimos a nuestros agricultores, a la sociedad y a la Pachamama
            </h2>
            <p className="pt-4 pb-8 mt-6 leading-7 text-black border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Nuestra prioridad es potenciar la <a className='text-green-600'> salud y funciones naturales de los suelos </a>mediante la restauración y almacenamiento de <a className='text-green-600'>carbono orgánico (SOC) y biodiversidad</a> para favorecer la capacidad y autonomía de producción de nuestros agricultores, obteniendo alimentos más sanos, agua limpia y reduciendo la huella de carbono agropecuaria.
            </p>
            
        </div>
        

        
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
        </div>
        
    </div>
    <div className="box-border mb-8 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        
        <div className=" border-b-2 md:border-b-0 box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 10, x: 0 }}
              transition={{duration: 1, delay: 1}}
       
  >
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>
            </motion.div>
        </div>

        
        <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
        <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 0}}
       
  >
            <h2 className="m-0 text-xl text-green-600 font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl text-left">
            Agricultura del Carbono y Economía Circular
            </h2>
            </motion.div>
            <p className="pt-4 pb-8 mt-6 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg ">
           <a className='text-green-600'> El carbono es el motor de la vida en nuestro planeta </a>y el suelo es un recurso vivo que lo contiene, entre sus funciones naturales está <a className='text-green-600'>reciclar nutrientes</a> para las futuras generaciones de seres vivos.funciones naturales está reciclar nutrientes para las futuras generaciones de seres vivos. La agricultura regenerativa del carbono consiste en emular estas funciones naturales del suelo para producir alimentos eficientemente,<a className='text-green-600'>transformando residuos en insumos útiles</a> para los próximos ciclos de cultivo, volviendo así a la agricultura en un modelo de economía circular.
            </p>
           
        </div>
        
    </div>
    

</section>
        
    



  )
}

export default Section2