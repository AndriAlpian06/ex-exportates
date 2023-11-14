import React, { useContext, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useUser } from './UserContext'
import { ShopContext } from '../context/shop-context'

const Navbar = () => {
    const {userData} = useUser();
    const navigate = useNavigate()
    const location = useLocation();
    // Fungsi untuk memeriksa apakah rute saat ini adalah /login atau /signup
    const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/signup';

    const {totalClicks} = useContext(ShopContext)

    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    //console.log(token)

    const Logout = () => {
        //console.log('Logout clicked');
        alert('Apakah anda yakin ingin keluar !');
        // auth.logout()
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        // Pastikan perubahan pada localStorage telah selesai
        const localStorageChangePromise = new Promise((resolve) => {
            resolve();
        });

        localStorageChangePromise.then(() => {
            // Navigasi kembali ke halaman utama
            navigate('/');
            
            // Setelah navigasi, lakukan reload
            window.location.reload();
        });
        
        // Lakukan tindakan lain yang diperlukan setelah logout.
    };

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
                    {userData && userData.data && userData.data.length > 0 ? (
                        // <p className='font-bold'>Logout</p>
                        <div className="flex items-center gap-x-4 uppercase font-bold"> 
                            <Link to='' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                            {userData.data[0].name}
                            </Link>
                            <Link to='' onClick={Logout} className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                            Logout
                            </Link>
                            <Link to='/cart' className={color ? 'group -m-2 flex items-center md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'group -m-2 flex items-center md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>    
                                {totalClicks > 0 && (
                                    <span className="-ml-1 mb-3 text-xs font-bold text-red-500 group-hover:text-red-500">{totalClicks}</span>
                                    
                                )}
                            </Link>                        
                        </div>
                        
                    ) : (
                        <div className="flex items-center gap-x-4 uppercase font-bold"> 
                            <Link to='/login' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                            Login
                            </Link>
                            <Link to='/cart' className={color ? 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-[#e64a19] p-4' : 'md:text-sm lg:text-tiny px-4 py-2 text-green-500 hover:border-b-2 hover:border-green-500 p-4'}>
                                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>    
                            </Link>                        
                        </div>
                    )}
                    
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar