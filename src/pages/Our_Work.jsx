import React, { useEffect, useState} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Our_Work = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const imageUrl1 = 'https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?auto=format&fit=crop&w=2880';

  return (
    <>
        <div className='w-full h-96 relative bg-black'>
            <img className='w-full h-full object-cover opacity-75' src={imageUrl1} />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                    <h1 className='uppercase text-5xl font-bold lg:ml-40'>OUR WORK</h1>      
                </div>
        </div>
        <div class="container mx-auto w-full h-full mt-10">
            <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{'left': '50%'}}></div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our arabica beans farm in Kintamani, Bali to make sure our coffee beans quality are on point.</p>
                </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Our staff picking up products that are ready to be delivered to our customer.</p>
                </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our robusta farm in Palembang, Sumatra to make sure products quality are maintained and beans are well kept.</p>
                    </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div class="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Visiting our virgin coconut oil factory to make sure products quality is right before products are shiped to our customer.</p>
                    </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                    </div>
                    <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our robusta beans farm in Mt. Temanggung, Indonesia to make sure our coffee beans quality are on point.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Our_Work