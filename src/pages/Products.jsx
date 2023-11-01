import React, { useEffect, useState} from 'react'
import { dataProducts } from '../Products'
//import { ShopContext } from '../context/shop-context';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Products = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    //console.log(dataProducts)

    const imageUrl1 = 'https://images.unsplash.com/photo-1605732563938-8f8d4e7ad651?auto=format&fit=crop&w=2880';

    const [selectedCategoryProducts, setSelectedCategoryProducts] = useState('AllProducts');
    
    const filteredDataBarang = selectedCategoryProducts === 'AllProducts' ? dataProducts : dataProducts.filter(item => item.category === selectedCategoryProducts);
     
    //const { addToCart, cartItems } = useContext(ShopContext)

    //const [id, setId] = useState()

    //const { id, productName, price, productImage } = props.data;

    //const cartItemAmount = cartItems[id]
  return (
    <>
        <div className='w-full h-screen relative bg-black'>
            <img className='w-full h-full object-cover opacity-75' src={imageUrl1} alt="" />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                    <h1 className='uppercase text-5xl font-bold lg:ml-40'>OUR PRODUCTS</h1>
                    <p className='w-9/12 py-4 text-2xl text-white lg:ml-40'>We have made quality our habit. It’s not something that we just strive for we live by this principle every day. See more of our products! From coffee beans to gas, we have it all!</p>      
                </div>
        </div>
        <main>
            <div className="container mx-auto px-6" 
                data-aos="fade-up"
                data-aos-duration="3000">
                <div className="mt-16">
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'AllProduts' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('AllProducts')}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Coconut Goods' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Coconut Goods')}
                    >
                        Coconut Goods
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Spices' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Spices')}
                    >
                        Spices
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Coffee Beans' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Coffee Beans')}
                    >
                        Coffee Beans
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Palm Goods' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Palm Goods')}
                    >
                        Palm Goods
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Sunflower Goods' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Sunflower Goods')}
                    >
                        Sunflower Goods
                    </button>
                    <button
                        type="button"
                        className={`text-green-500 hover:text-white border-green-500 bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-green-500 dark:text-green-500 dark:hover:text-green-500 dark:hover:bg-white dark:bg-white dark:focus:ring-green-500 ${selectedCategoryProducts === 'Other Goods' ? 'bg-green-500 text-green-500' : ''}`}
                        onClick={() => setSelectedCategoryProducts('Other Goods')}
                    >
                        Other Goods
                    </button>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {filteredDataBarang.map(item => (
                            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" data-aos="fade-up" data-aos-duration="1000" key={item.id}>
                                <div className="flex items-end justify-end h-56 w-full bg-cover" 
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: 'cover',
                                    }}>
                                    <button 
                                        className="p-2 rounded-full bg-green-500 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                        >
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        
                                    </button>
                                </div>
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">{item.name}</h3>
                                    {/* <span className="text-gray-500 mt-2">$12</span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Products