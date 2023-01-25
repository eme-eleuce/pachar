import Image from 'next/image';
import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import Foto1 from '../../public/fotos/algore.jpg';
import Foto2 from '../../public/fotos/charles.jpg';

const Numeros = () => {
  return (
    <div className=" mx-auto  w-full  md:px-14 lg:px-15 lg:py-20 mt-10">
      <div className="grid grid-cols-1 gap-5 md:gap-1 md:grid-cols-4">
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={1000}
  duration={2}
  delay={4}
  suffix=" tn"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
            Biochar producido
          </p>
        </div>
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={1000}
  duration={2}
  delay={4}
  suffix=" tn"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
           Compost producido
          </p>
        </div>
        <div className="text-center md:border-green-600 md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={2000}
  duration={2}
  delay={4}
  suffix=" tn"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800  lg:text-base">
            CO2-eq CAPTURADOS
          </p>
        </div>

        <div className="text-center md:border-r mt-5 md:mt-0">
          <h6 className="text-5xl font-bold lg:text-5xl xl:text-6xl text-green-600">
          <CountUp
  end={100}
  duration={2}
  delay={4}
  suffix=" ha"
> </CountUp>
          </h6>
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
            Suelos enmendados
          </p>
        </div>
        
        
      </div>
      <div className='grid md:grid-cols-2 mb-10'>

      <div className="md:w-[700px] flex items-center justify-center px-10 lg:px-[4rem] py-5 mt-[9rem]">
    <div className=" mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 " >
        <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-[8rem] h-[8rem] lg:w-[13rem] lg:h-[13rem] -mt-16 mx-auto shadow-lg">
               <Image src={Foto1} alt='/'/>
            </div>
        </div>
        <div className="w-full mb-10">
            <div className="text-3xl text-green-600 text-left leading-tight h-3">“</div>
            <p className="text-md lg:text-2xl text-gray-500 text-center px-5">El biocarbón es una de las nuevas estrategias más emocionantes para restaurar el carbono en suelos mermados y secuestrar cantidades significativas de CO<a className='lowercase'>2</a>.</p>
            <div className="text-3xl text-green-600 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div className="w-full">
            <p className="text-xl text-green-600 font-bold text-center uppercase">Al Gore</p>
            
        </div>
    </div>
</div>

<div className="md:w-[700px] flex items-center justify-center px-10 lg:px-[4rem] py-5 mt-[9rem] ">
    <div className=" mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 " >
        <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-[8rem] h-[8rem] lg:w-[13rem] lg:h-[13rem] -mt-16 mx-auto shadow-lg">
                <Image src={Foto2} alt='/'/>
            </div>
        </div>
        <div className="w-full mb-10">
            <div className="text-3xl text-green-600 text-left leading-tight h-3">“</div>
            <p className="text-md lg:text-2xl text-gray-500 text-center px-5">Esencialmente, todos los seres vivos dependen del suelo. No puede haber vida sin suelo y no hay suelo sin vida, han evolucionado juntos.</p>
            <div className="text-3xl text-green-600 text-right leading-tight h-3 -mt-3">”</div>
        </div>
        <div className="w-full">
            <p className="text-xl text-green-600 font-bold text-center uppercase">Charles Kellogg</p>
           
        </div>
    </div>
</div>
        </div>
        
      
    </div>
  )
}

export default Numeros