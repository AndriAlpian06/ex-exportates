// import { Menu, Transition } from '@headlessui/react'
import React, { useState } from 'react'

import MobileNavbar from './MobileNavbar'

import { Link } from 'react-router-dom'


const Navbar = () => {
    

    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'fixed top-0 left-0 right-0 w-screen bg-white z-10 border-b-green-500' : 'lg:top-10 sm:top-10 left-0 right-0 bg-white border-b-green-500 rounded-md w-9/12 mx-auto absolute z-10'}>
        <MobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2 ml-2">
                        <a href="/" className=""><h1 className='uppercase font-bold text-xl text-green-500'>exportates.</h1></a>
                    </div>
                    <div className="flex items-center gap-x-4 uppercase font-bold">    
                        <Link to='/' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Home</Link>
                        <Link to='/our_work' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Our Work</Link>
                        <Link to='/products' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Products</Link>
                        <Link to='/contact_us' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Contact Us</Link>                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar