import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const MobileNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {

        setNav(!nav)
    }

  return (
    <>
    <div onClick={handleNav} className='block sm:hidden z-10 items-right'>
    {nav ? <AiOutlineClose size={25} />  : <AiOutlineMenu size={25} />}
  </div>

    <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex justify-start  bg-green-500 text-left ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 w-full h-screen  flex justify-start  bg-green-500 text-left ease-in duration-300'}>
    <ul className='mt-[8rem] mr-8'>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#0B5DA0] text-4xl'>
             <Link href='/'> Home</Link>
        </li>
        <li className='p-4 hover:text-[#0B5DA0] text-4xl'>
  <Disclosure as="div" className="">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex  justify-between ">
        <span> Empresa</span>
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
        Nuestra Empresa
      </Disclosure.Panel>
      <Disclosure.Panel  className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        <Link onClick={() => setNav(false)} href='/team'>Equipo</Link>
      </Disclosure.Panel>
      <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        Sostenibilidad
      </Disclosure.Panel>
      <Disclosure.Panel onClick={() => setNav(false)} className="px-2 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        Alliances
      </Disclosure.Panel>
      </Transition>
    </>
    
  )}
</Disclosure>
        </li>
        <li className='p-4 hover:text-[#0B5DA0] text-4xl'>
        <Disclosure as="div" className="mt-2">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex  justify-between       ">
        <span> Productos</span>
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
        <li className='p-4 hover:text-[#0B5DA0] text-4xl'>
        <Disclosure as="div" className="mt-2">
  {({ open }) => (
    <>
      <Disclosure.Button className="flex  justify-between       ">
        <span> Mitigacion</span>
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
      <Disclosure.Panel onClick={() => setNav(false)} className="px-1 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        Secuestro del carbono
      </Disclosure.Panel>
      <Disclosure.Panel onClick={() => setNav(false)} className="px-1 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        Carbono organico del suelo
      </Disclosure.Panel>
      <Disclosure.Panel onClick={() => setNav(false)} className="px-1 pt-2 pb-1 text-xl text-[#E9E9EB] ">
        Neutralidad del carbono
      </Disclosure.Panel>
      </Transition>
    </>
  )}
</Disclosure>
        </li>
        <li onClick={() => setNav(false)} className='p-4 hover:text-[#0B5DA0] text-4xl'>
             Contact
        </li>
        
    </ul>

    </div>
    </>
  )
}

export default MobileNav