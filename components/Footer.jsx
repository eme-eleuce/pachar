import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 
import Logo1 from "../public/logo1/pachar-h.png"
import {BsTelephoneFill } from 'react-icons/bs'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
  <div
    className="max-w-[1240px] px-4 py-8 mx-auto space-y-8 sm:px-6 lg:space-y-10 lg:px-5 "
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className='lg:ml-8'>
        <div className="ml-[3rem] md:ml-0">
          <Image src={Logo1} className='w-[15rem] h-[8rem] ' alt='/'/>
        </div>

        <div className="max-w-xs  text-gray-500 text-center md:text-left lg:ml-0 ml-[0.8rem]">
       
Av. Francisco de Orellana #111 y Av. Plaza Dañín, Oficina 52
<p>Guayaquil, Ecuador</p>
<p className='flex items-center justify-center lg:justify-start '><BsTelephoneFill className='mr-1' size={20}/> +593 93 9928517  </p>

        </div>

        <ul className="flex gap-6 mt-8 lg:ml-0 ml-[8.5rem] items-center">
          

          
          

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              
              <BsLinkedin size={25}/>
              
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
             <BsInstagram size={25}/>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 mt-[4rem] lg:ml-[9rem] ml-8"
      >
        <div>
          <p className="font-bold text-[#0B5DA0] text-lg"> Empresa</p>

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <div href="#" className="text-gray-700 transition hover:opacity-75">
                  <Link href='/empresa'>Nuestra Empresa</Link>
                </div>
              </li>

              <li>
                <div href="#" className="text-gray-700 transition hover:opacity-75">
                  <Link href='/team'>Equipo</Link>
                </div>
              </li>             
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-bold text-[#0B5DA0] text-lg">Productos</p>

          <nav aria-label="Footer Navigation - Company" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Pacchar Pure
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Compost
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  COMBI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Vermichar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Inoculantes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className="font-bold text-[#0B5DA0] text-lg">Mitigacion</p>

          <nav  className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Secuestro del carbono
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Carbono organico del suelo
                </a>
              </li>

              <li>
                <div className="text-gray-700 transition hover:opacity-75">
                  <Link href='/sos-1'>
                  Neutralidad del carbono
                  </Link> 
                </div>
              </li>
            </ul>
          </nav>
        </div>

        
      </div>
    </div>

    <p className="text-sm font-bold text-[#006535] lg:ml-5">
      &copy; 2022. Pacchar. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer