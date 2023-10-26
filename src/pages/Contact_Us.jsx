import React, { useEffect, useState} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact_Us = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const imageUrl1 = 'https://images.unsplash.com/photo-1557064262-6acc904bffbd?auto=format&fit=crop&w=2880';

  return (
    <>
        <div className='w-full h-screen relative bg-black'>
            <img 
                className='w-full h-full object-cover opacity-75' 
                src={imageUrl1}
            />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                <section className="bg-transparent mt-8">
                    <div className="container mx-auto px-6 lg:py-12 md:py-4">
                        {/* <div className='mt-40'>
                            <h1 className="mt-2 text-1xl font-semibold text-gray-800 dark:text-white md:text-1xl md:py-8">Contact us</h1>
                        </div> */}

                        <div className="lg:mt-10 md:mt-2 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="grid grid-cols-1 lg:gap-12 md:gap-6 md:grid-cols-1">
                            <div>
                                <h2 className="lg:mt-4 md:mt-2 lg:text-3xl md:text-base font-medium text-gray-800 dark:text-white">GET IN TOUCH WITH OUR CEO</h2>
                                <p className="mt-2 text-1xl text-white">brian.pradana@exportates.com</p>
                            </div>
                            <div>
                                <h2 className="mt-4 lg:text-3xl md:text-base font-medium text-gray-800 dark:text-white">for info & inquiry</h2>
                                <p className="mt-2 text-1xl text-white">pteksporpradananusantara@gmail.com</p>
                            </div>
                            <div>
                                <h2 className="mt-4 lg:text-3xl md:text-base font-medium text-gray-800 dark:text-white">Open hours (GMT+7)</h2>
                                <p className="mt-2 text-1xl text-white">Monday - Friday: 9am - 7pm</p>
                                <p className="mt-2 text-1xl text-white">Saturday: 10am - 7pm</p>
                            </div>
                        </div>

                        <div className="rounded-lg bg-transparent md:p-8">
                            <form>
                            <div className="-mx-2 md:flex md:items-center">
                                <div className="flex-1 px-2">
                                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                <input type="text" placeholder="John " className="mt-2 block w-full rounded-lg border border-gray-200 bg-transparent px-5 py-2.5 text-white placeholder-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                                </div>

                                <div className="mt-4 flex-1 px-2 md:mt-0">
                                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                <input type="text" placeholder="Doe" className="mt-2 block w-full rounded-lg border border-gray-200 bg-transparent px-5 py-2.5 text-white placeholder-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" className="mt-2 block w-full rounded-lg border border-gray-200 bg-transparent px-5 py-2.5 text-white placeholder-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" />
                            </div>

                            <div className="mt-4 w-full">
                                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea className="mt-2 block h-32 w-full rounded-lg border border-gray-200 bg-transparent px-5 py-2.5 text-white placeholder-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>

                            <button className="mt-4 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Send message</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </section>      
            </div>
        </div>
        
    </>
  )
}

export default Contact_Us