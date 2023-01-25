import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'; 
import Foto1 from '../public/fotos/foto1.png'
import Foto2 from '../public/fotos/foto2.png'
import Foto3 from '../public/fotos/foto3.png'

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
            <Image src={Foto1} alt='/'/>
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
            Nuestras tecnologías de Pirólisis y Compostaje nos permiten producir biochar, compost y otros productos agroecológicos de alta calidad con materias primas de fuentes responsables
            </p>
           
        </div>
        
    </div>
    <div className="box-border mb-8 flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6  border-0 border-gray-300 border-solid md:mt-[6rem] xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        
        <div className="box-border w-full text-green-600 border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-bold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Servimos a nuestros agricultores, a la sociedad y a la Pachamama
            </h2>
            <p className="pt-4 pb-8 mt-6 leading-7 text-black border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Nuestra prioridad es potenciar la <a className='text-green-600'> salud y funciones naturales de los suelos </a>mediante la restauración y almacenamiento de <a className='text-green-600'>carbono orgánico (SOC) y biodiversidad</a> favoreciendo la capacidad y autonomía de producción de nuestros agricultores, obteniendo alimentos más sanos, agua limpia y reduciendo la huella de carbono atmosférico.
            </p>
            
        </div>
        

        
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <Image src={Foto2} alt='/'/>
        </div>
        
    </div>
    <div className="box-border md:mt-[5rem] mb-8 flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        
        <div className=" border-b-2 md:border-b-0 box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 10, x: 0 }}
              transition={{duration: 1, delay: 1}}
       
  >
            <Image src={Foto3} />
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
           <a className='text-green-600'> El carbono es el motor de la vida en nuestro planeta </a>y el suelo es un recurso vital que naturalmente lo contiene.<a className='text-green-600'> La agricultura regenerativa del carbono </a>consiste en devolver este elemento para así emular las funciones naturales del suelo en sistemas agropecuarioss,  esto permite producir alimentos con más <a className='text-green-600'>eficiencia y sostenibilidad </a>al transformar los residuos en insumos útiles para los próximos ciclos de cultivo, así la agricultura se convierte en un sistema de economía circular.
            </p>
           
        </div>
        
    </div>
    

</section>
        
    



  )
}

export default Section2