import React, { useState, useEffect } from "react";
import { dataProducts } from "../../Products";
import { Product } from "./product";
import "./shop.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Shop = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const imageUrl1 = 'https://images.unsplash.com/photo-1605732563938-8f8d4e7ad651?auto=format&fit=crop&w=2880';

  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState('AllProducts');
    
  const filteredDataBarang = selectedCategoryProducts === 'AllProducts' ? dataProducts : dataProducts.filter(item => item.category === selectedCategoryProducts);

  return (
    <>
      <div className='w-full h-96 relative bg-black'>
          <img className='w-full h-full object-cover opacity-75' src={imageUrl1} alt="" />
              <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                  <h1 className='uppercase text-5xl font-bold lg:ml-40 py-8 mt-16'>OUR PRODUCTS</h1>
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
                    {filteredDataBarang.map((product, index) => (
                        <Product data={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
      </main>
    </>
  );
};