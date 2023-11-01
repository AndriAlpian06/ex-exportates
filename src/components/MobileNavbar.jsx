import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileNavbar() {

    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)

  return (
    <Menu as={'div'} className='flex lg:hidden items-center justify-between py-2 px-4'>
        <div className='flex px-4 items-center'>
            <a href="#" className="text-white font-medium mr-6"><h1 className='uppercase font-bold text-xl text-green-500'>exportates.</h1></a>
        </div>

        <Menu.Button className='focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={color ? 'w-6 h-6 text-green-500' : 'w-6 h-6 text-green-500'}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-8 py-1 rounded-lg w-56 overflow-hidden'>

            <Link to="/" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">Home</Link>
            <Link to="/our_work" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">Our Work</Link>
            <Link to="/products" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">Products</Link>
            <Link to="/contact_us" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">Contact Us</Link>
            <Link to="/" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">Login</Link>
            <Link to="/cart" className="px-4 py-2 text-sm hover:bg-gray-100 text-green-500 hover:text-black block">
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </Link>
          </Menu.Items>
        </Transition>
    </Menu>
  )
}
