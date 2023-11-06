import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();

    // Fungsi untuk memeriksa apakah rute saat ini adalah /login atau /signup
    const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
        {!isLoginOrRegisterPage && (
            <footer className="bg-gray-200 relative pb-6 pt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full px-4 lg:w-6/12">
                        <h4 className="text-3xl font-semibold">EXPORTATES.</h4>
                        <div className="relative w-full h-64 p-4 bg-red-300">
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c48aa24a119%3A0xda2d310350a6e685!2sJl.%20Intan%202%20No.28%2C%20RT.005%2FRW.020%2C%20Kayuringin%20Jaya%2C%20Kec.%20Bekasi%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017144%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                                frameBorder="0" 
                                style={{'border':0}} 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0"
                            >
                            </iframe>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="items-top mb-6 flex flex-wrap gap-8">
                        <div className="ml-auto w-full lg:w-4/12 space-y-4">
                            <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">Get in touch</span>
                            <ul className="list-unstyled">
                            <li>
                                <a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://www.creative-tim.com/presentation?ref=nr-footer">brian.pradana@exportates.com</a></li>
                            </ul>
                            <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase space-y-8">Address</span>
                            <ul className="list-unstyled">
                            <li><a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://www.creative-tim.com/presentation?ref=nr-footer">Jalan Intan II, No. 14, Bumi Satria Kencana, Kayuringin Jaya, South Bekasi, West Java, Indonesia, 17144</a></li>
                            </ul>
                        </div>
                        <div className="w-full px-4 lg:w-4/12">
                            <ul className="list-unstyled">
                            <li><a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer">Home</a></li>
                            <li><a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://creative-tim.com/terms?ref=nr-footer">Contact</a></li>
                            <li><a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://creative-tim.com/privacy?ref=nr-footer">Product</a></li>
                            <li><a className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold" href="https://creative-tim.com/contact-us?ref=nr-footer">Our Work</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr className="border-blueGray-300 my-6" />
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="mx-auto w-full px-4 text-center md:w-4/12">
                        <div className="text-blueGray-500 py-1 text-sm font-semibold">Copyright © 2023 by <a href="https://www.creative-tim.com?ref=nr-footer" className="text-blueGray-500 hover:text-blueGray-800">EXPORTATES</a>.</div>
                    </div>
                    </div>
                </div>
            </footer>
        )}
    </>
  )
}

export default Footer