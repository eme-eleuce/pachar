import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Section1 = () => {
  return (
    
<div id='section1' className=" max-w-[1240px] mx-auto text-center py-10">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 10, y: 0 }}
              transition={{duration: 1, delay: 0.5}}
       
  >
      
      <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      </motion.div>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default Section1