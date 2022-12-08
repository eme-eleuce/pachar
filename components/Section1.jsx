import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Section1 = () => {
  return (
    
<div id='section1' className=" max-w-[1240px] mx-auto text-center py-10">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2  flex flex-col  items-center text-center">
    
    <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 0}}
       
  >
      <h1 className=" sm:text-4xl text-3xl py-16 font-bold text-gray-900 text-center"> En Pacchar
      
      </h1>
      </motion.div>
      <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 0.5}}
       
  >  
      <p className="py-10 lg:px-8 lg:text-center text-left text-2xl lg:text-3xl"> Creamos valor a partir de residuos forestales y agropecuarios mediante procesos de Pirólisis y Compostaje para producir biochar, compost y otros productos orgánicos derivados, evitando la quema o descomposición de la biomasa a gases de efecto invernadero.</p>
      </motion.div>
      <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 1}}
       
  >  
      <p className="py-10 lg:text-center text-left text-2xl">
   
      Introducimos nuestros productos a agricultores y empresas locales para favorecer su productividad y sostenibilidad, reducir su dependencia  a los agroquímicos.

      </p>
  </motion.div>
  <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 1.4}}
       
  >  
      <p className="py-10 lg:text-center text-left text-2xl">
   
      Crear modelos de economía circular, reducir la huella de carbono y regenerar la salud de los suelos, aportando así a la producción de alimentos saludables, a la rehabilitación de funciones ecosistémicas y con ellos a la calidad de vida de las familias ecuatorianas.


      </p>
  </motion.div>
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</div>
    
  )
}

export default Section1