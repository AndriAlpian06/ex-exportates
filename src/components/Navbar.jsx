// import { Menu, Transition } from '@headlessui/react'
import React, { useState } from 'react'

import MobileNavbar from './MobileNavbar'

import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    
    const location = useLocation();

    // Fungsi untuk memeriksa apakah rute saat ini adalah /login atau /signup
    const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/signup';

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
    <div 
        className={isLoginOrRegisterPage
            ? 'lg:top-0 sm:top-10 left-0 right-0 bg-white border-b-green-500 rounded-md w-9/12 mx-auto absolute z-10'
            : color 
            ? 'fixed top-0 left-0 right-0 w-screen bg-white z-10 border-b-green-500' 
            : 'lg:top-10 sm:top-10 left-0 right-0 bg-white border-b-green-500 rounded-md w-9/12 mx-auto absolute z-10'}>
        <MobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-around">
                    <div className="flex items-center gap-x-2 ml-2">
                        <a href="/" className=""><h1 className='uppercase font-bold text-xl text-green-500'>exportates.</h1></a>
                    </div>
                    <div className="flex items-center gap-x-4 uppercase font-bold">    
                        <Link to='/' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Home</Link>
                        <Link to='/our_work' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Our Work</Link>
                        <Link to='/shop' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Products</Link>
                        <Link to='/contact_us' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Contact Us</Link>                        
                    </div>
                    <div className="flex items-center gap-x-4 uppercase font-bold">    
                        <Link to='/login' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>Login</Link>
                        <Link to='/cart' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>    
                        </Link>                        
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar