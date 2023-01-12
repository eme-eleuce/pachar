import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const Numeros = () => {
  return (
    <div className=" mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-8 md:gap-1 md:grid-cols-3">
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
          <p className="text-md font-bold tracking-widest text-gray-800 uppercase lg:text-base">
            Carbono organico
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Numeros