import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

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
    </div>
  )
}

export default Numeros