import React, {Fragment,useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Menu, Transition } from '@headlessui/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

const NavItem = ({name, subname1,subname2, subname3, subname4, subname5}) => {
  return (
    

<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center text-2xl  ">
           {name}
          <IoIosArrowDown className="-mr-1 ml-1 mt-3 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
       <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#C7C7C7] shadow-lg   focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#0B5DA0]' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {subname1}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#0B5DA0]' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {subname2}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#0B5DA0]' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {subname3}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#0B5DA0]' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {subname4}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'text-[#0B5DA0]' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {subname5}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    
  )
}

export default NavItem