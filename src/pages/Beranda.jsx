import React, { useEffect, useState} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Beranda = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const imageUrl1 = 'https://images.unsplash.com/photo-1605732562084-f528a2154616?auto=format&fit=crop&w=2880';

  return (
    <>
        <div className='w-full h-screen relative bg-slate-300'>
            <img className='w-full h-full object-cover' src={imageUrl1} />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                    <h1 className='uppercase text-5xl font-bold lg:ml-40'>EXPORTATES.</h1>
                    <p className='py-4 text-2xl text-white lg:ml-40'>AN INDONESIAN-BASED EXPORTING COMPANY</p>
                    <div className='w-9/12 lg:ml-40 lg:mt-40'>
                        <form>   
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full bg-transparent p-4 pl-10 text-sm text-white border border-white rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Cari Informasi" required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        <section className="-mt-36 bg-gray-50 px-4 pb-20 pt-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative flex flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-500/10">
                    <div className="p-6 px-8 text-center">
                    <button className="middle none pointer-events-none relative mb-6 h-12 max-h-[48px] w-12 max-w-[48px] rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-center font-sans text-sm font-medium uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-white"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg
                        ></span>
                    </button>
                    <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">WHY US?</h5>
                    <p className="text-blue-gray-600 block font-sans text-base font-normal leading-relaxed antialiased">We work closely with our clients to make sure they get the greatest product at a fair price. We have developed a means for customers to participate in our business and our exporting policies are based on their comments.</p>
                    </div>
                </div>
                <div className="relative flex flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-500/10">
                    <div className="p-6 px-8 text-center">
                    <button className="middle none pointer-events-none relative mb-6 h-12 max-h-[48px] w-12 max-w-[48px] rounded-full bg-gradient-to-tr from-red-600 to-red-400 text-center font-sans text-sm font-medium uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-white"><path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd"></path></svg
                        ></span>
                    </button>
                    <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">WHAT WE GIVE?</h5>
                    <p className="text-blue-gray-600 block font-sans text-base font-normal leading-relaxed antialiased">We don’t just export goods, but goods of the best quality spices from Indonesia to the best fuel from around the world. We like to make your export experience a truly wonderful trip.</p>
                    </div>
                </div>
                <div className="relative flex flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-500/10">
                    <div className="p-6 px-8 text-center">
                    <button className="middle none pointer-events-none relative mb-6 h-12 max-h-[48px] w-12 max-w-[48px] rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 text-center font-sans text-sm font-medium uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-white"><path fillRule="evenodd" d="M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0112.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 01-1.395-.551A21.69 21.69 0 0018.75 10.5 6.75 6.75 0 0012 3.75zM6.157 5.739a.75.75 0 01.21 1.04A6.715 6.715 0 005.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 01-1.27-.8A6.715 6.715 0 003.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 011.04-.211zM12 7.5a3 3 0 00-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 11-1.112-1.008A10.459 10.459 0 007.5 10.5a4.5 4.5 0 119 0c0 .547-.022 1.09-.067 1.626a.75.75 0 01-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 00-3-3zm0 2.25a.75.75 0 01.75.75A15.69 15.69 0 018.97 20.738a.75.75 0 01-1.14-.975A14.19 14.19 0 0011.25 10.5a.75.75 0 01.75-.75zm3.239 5.183a.75.75 0 01.515.927 19.415 19.415 0 01-2.585 5.544.75.75 0 11-1.243-.84 17.912 17.912 0 002.386-5.116.75.75 0 01.927-.515z" clipRule="evenodd"></path></svg
                        ></span>
                    </button>
                    <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">OUR GOAL</h5>
                    <p className="text-blue-gray-600 block font-sans text-base font-normal leading-relaxed antialiased">Our vision is to export to other countries to help the local economy as well as prospering the local farmers
                        <br/>Our mission is to achieve the best export experience we can give you. Not just an ordinary export company
                    </p>
                    </div>
                </div>
                </div>
                <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-blue-gray-900 h-6 w-6"><path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"></path></svg>
                    </div>
                    <h3 className="text-blue-gray-900 mb-3 block font-sans text-3xl font-bold leading-snug tracking-normal antialiased">Quality, not quantity</h3>
                    <p className="text-blue-gray-500 mb-8 block font-sans text-base font-normal leading-relaxed antialiased">We have made quality our habit. It’s not something that we just strive for we live by this principle every day. See more of our products! From coffee beans to gas, we have it all!</p>
                    <button className="middle none center rounded-lg border border-blue-500 px-6 py-3 font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">read more</button>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-500/10">
                        <img alt="Card Image" src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=1212&h=992" className="h-full w-full rounded-lg" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Beranda