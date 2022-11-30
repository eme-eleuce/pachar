
import Link from 'next/link';
import React, {Fragment, useState, useEffect } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Menu, Transition } from '@headlessui/react';
import NavItem from './items/NavItem';
import NavItem2 from './items/NavItem2';
import { Disclosure } from '@headlessui/react'
import NavItem3 from './items/NavItem3';



  

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const handleNav = () => {

        setNav(!nav)
    }

    useEffect(() => {

        const changeColor = () => {

            if (window.scrollY >= 60) {
                 
                setColor('#939393')
                
            } else {

                setColor('transparent')
               
            }
        };
        window.addEventListener('scroll', changeColor)
    },[] )


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease duration-500'>
        <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 py-2 '>
            
            
            
            <ul  className='hidden sm:flex '>
                <li className='p-3 ml-5 text-2xl hover:text-gray-300'>
                     <Link href='/'> Home </Link>
                </li>
                
                <li className='p-3 ml-4 hover:text-gray-300'>
                
                <NavItem
                 name='Empresa'
                 subname1='Nuestra Empresa'
                 subname2='Equipo'
                 subname3='Sostenibilidad'
                 />
                
                </li>
                <li className='p-3 ml-3  hover:text-gray-300'>
                <NavItem2
                 name='Productos'
                 subname1='Pacchar Pure'
                 subname2='Compost'
                 subname3='COMBI'
                 subname4='Vermichar'
                 subname5='Inoculantes'/>
                </li>
                <li className='p-3 ml-3  hover:text-gray-300'>
                <NavItem3
                 name='Mitigacion'
                 subname1='Secuestro del Carbono'
                 subname2='Carbono organico del suelo'
                 subname3='Neutralidad del carbono'
                />
                </li>
                <li className='p-3 ml-4 text-2xl hover:text-gray-300'>
                    <Link href='/'> Contacto</Link>
                </li>
            </ul>
            

            <div onClick={handleNav} className='block sm:hidden z-10 items-right'>
              {nav ? <AiOutlineClose size={25} style={{color: `${textColor}`}}/>  : <AiOutlineMenu size={25} style={{color: `${textColor}`}}/>}
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex justify-center  bg-green-500 text-left ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 w-full h-screen  flex justify-center  bg-green-500 text-left ease-in duration-300'}>
            <ul className='mt-[8rem]'>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     <Link href='/'> Home</Link>
                </li>
                <li className='p-4 hover:text-gray-400 text-4xl'>
          <Disclosure as="div" className="">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  justify-between ">
                <span> About</span>
                <IoIosArrowUp
                  className={`${
                    open ? 'rotate-180 transform ease-in duration-200' : ''
                  } h-5 w-5 mt-3 ml-1`}
                />
              </Disclosure.Button>
              <Transition
        
        enter="transition ease-in duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-y-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-y-100"
        leaveTo="transform opacity-0 scale-95"
      >
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                History
              </Disclosure.Panel>
              <Disclosure.Panel  className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                <Link onClick={() => setNav(false)} href='/team'>Team</Link>
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                Work
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                Alliances
              </Disclosure.Panel>
              </Transition>
            </>
            
          )}
        </Disclosure>
                </li>
                <li className='p-4 hover:text-gray-400 text-4xl'>
                <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  justify-between       ">
                <span> Products</span>
                <IoIosArrowUp
                  className={`${
                    open ? 'rotate-180 transform ease-in duration-200' : ''
                  } h-5 w-5 mt-3 ml-1`}
                />
              </Disclosure.Button>
              <Transition
        
        enter="transition ease-in duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-y-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-y-100"
        leaveTo="transform opacity-0 scale-95"
      >
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                Pacchar Pure
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                Compost
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                Compost
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
                COMBI
              </Disclosure.Panel>
              <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2  text-xl text-[#E9E9EB] ">
                Inoculantes
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
                </li>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     Contact
                </li>
            </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar