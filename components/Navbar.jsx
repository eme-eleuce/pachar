
import Link from 'next/link';
import React, {Fragment, useState, useEffect } from 'react';
import NavItem from './items/NavItem';
import NavItem2 from './items/NavItem2';
import NavItem3 from './items/NavItem3';
import MobileNav from './items/mobile/MobileNav';



  

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('black');
    

    useEffect(() => {

        const changeColor = () => {

            if (window.scrollY >= 0) {
                 
                setColor('#181818')
                
            } else {

                setColor('transparent')
               
            }
        };
        window.addEventListener('scroll', changeColor)
    },[] )


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease duration-500 text-white'>
        <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 py-2 '>
            
            
            
            <ul  className='hidden sm:flex '>
            <Link href='/'>
                <li className='p-3  text-2xl hover:text-[#0B5DA0]'>
                      Home 
                </li>
            </Link>
                
                <li className='p-3 ml-4 hover:text-[#0B5DA0]'>
                
                <NavItem
                 name='Empresa'
                 subname1='Nuestra Empresa'
                 subname2='Equipo'
                 
                 />
                
                </li>
                <li className='p-3 ml-3  hover:text-[#0B5DA0]'>
                <NavItem2
                 name='Productos'
                 subname1='Pacchar Pure'
                 subname2='Compost'
                 subname3='COMBI'
                 subname4='Vermichar'
                 subname5='Inoculantes'/>
                </li>
                <li className='p-3 ml-3  hover:text-[#0B5DA0]'>
                <NavItem3
                 name='Sostenibilidad'
                 subname1='Secuestro del Carbono'
                 subname2='Carbono organico del suelo'
                 subname3='Neutralidad del carbono'
                />
                </li>
                <li className='p-3 ml-4 text-2xl hover:text-[#0B5DA0]'>
                    <Link href='/'> Contacto</Link>
                </li>
            </ul>
            {/* Mobile Menu */}
            <MobileNav />
            
        </div>
    </div>
  )
}

export default Navbar